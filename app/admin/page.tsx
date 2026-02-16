"use client"

import { useState, useCallback } from "react"
import useSWR, { mutate } from "swr"
import {
  Plus,
  Pencil,
  Trash2,
  ArrowLeft,
  GripVertical,
  Image as ImageIcon,
  ExternalLink,
  Save,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import type { PortfolioItem } from "@/lib/portfolio-data"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const CATEGORIES = [
  { key: "education", label: "Education" },
  { key: "experience", label: "Experience" },
  { key: "academic-project", label: "Academic Projects" },
  { key: "personal-project", label: "Personal Projects" },
  { key: "club", label: "Clubs" },
] as const

type CategoryKey = (typeof CATEGORIES)[number]["key"]

export default function AdminPage() {
  const { data, error, isLoading } = useSWR<Record<string, PortfolioItem[]>>(
    "/api/projects",
    fetcher
  )
  const [activeTab, setActiveTab] = useState<CategoryKey>("education")
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<{
    item: PortfolioItem
    category: CategoryKey
  } | null>(null)
  const [saving, setSaving] = useState(false)

  const openCreate = useCallback(() => {
    setEditItem({
      id: `${activeTab}-${Date.now()}`,
      title: "",
      category: activeTab as PortfolioItem["category"],
      image: "/images/hero-bg.jpg",
      linkText: "View Details",
      href: "#",
    })
    setIsCreating(true)
    setIsDialogOpen(true)
  }, [activeTab])

  const openEdit = useCallback((item: PortfolioItem) => {
    setEditItem({ ...item })
    setIsCreating(false)
    setIsDialogOpen(true)
  }, [])

  const handleSave = useCallback(async () => {
    if (!editItem) return
    setSaving(true)
    try {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: activeTab, item: editItem }),
      })
      await mutate("/api/projects")
      setIsDialogOpen(false)
      setEditItem(null)
    } finally {
      setSaving(false)
    }
  }, [editItem, activeTab])

  const handleDelete = useCallback(
    async (item: PortfolioItem, category: CategoryKey) => {
      setSaving(true)
      try {
        await fetch(
          `/api/projects?category=${encodeURIComponent(category)}&id=${encodeURIComponent(item.id)}`,
          { method: "DELETE" }
        )
        await mutate("/api/projects")
        setDeleteConfirm(null)
      } finally {
        setSaving(false)
      }
    },
    []
  )

  const items = data?.[activeTab] ?? []

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
            <div className="h-5 w-px bg-border" />
            <h1 className="font-display text-lg font-bold text-foreground tracking-tight">
              Admin Panel
            </h1>
          </div>
          <Badge variant="outline" className="text-xs">
            {items.length} items
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as CategoryKey)}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <TabsList className="flex-wrap h-auto">
              {CATEGORIES.map((cat) => (
                <TabsTrigger key={cat.key} value={cat.key} className="text-xs sm:text-sm">
                  {cat.label}
                  {data?.[cat.key] && (
                    <span className="ml-1.5 rounded-full bg-foreground/10 px-1.5 py-0.5 text-[10px] font-medium">
                      {data[cat.key].length}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <Button onClick={openCreate} size="sm" className="gap-1.5">
              <Plus className="h-4 w-4" />
              Add Item
            </Button>
          </div>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              ) : error ? (
                <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center text-destructive">
                  Failed to load data. Please refresh.
                </div>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-20 text-center">
                  <div className="rounded-full bg-muted p-3 mb-4">
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    No items in this category yet
                  </p>
                  <Button onClick={openCreate} variant="outline" size="sm" className="gap-1.5">
                    <Plus className="h-4 w-4" />
                    Add First Item
                  </Button>
                </div>
              ) : (
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-10" />
                        <TableHead>Title</TableHead>
                        <TableHead className="w-[140px]">Link Text</TableHead>
                        <TableHead className="w-[100px] text-right">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow
                          key={item.id}
                          className="group transition-colors"
                        >
                          <TableCell className="text-muted-foreground">
                            <GripVertical className="h-4 w-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              {item.image && (
                                <div className="h-10 w-14 rounded-md bg-muted overflow-hidden flex-shrink-0">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-sm text-foreground line-clamp-1">
                                  {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {item.id}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-muted-foreground">
                              {item.linkText}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => openEdit(item)}
                                aria-label={`Edit ${item.title}`}
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                onClick={() =>
                                  setDeleteConfirm({
                                    item,
                                    category: cat.key,
                                  })
                                }
                                aria-label={`Delete ${item.title}`}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Edit / Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">
              {isCreating ? "Add New Item" : "Edit Item"}
            </DialogTitle>
            <DialogDescription>
              {isCreating
                ? "Create a new portfolio entry."
                : "Update this portfolio entry."}
            </DialogDescription>
          </DialogHeader>

          {editItem && (
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editItem.title}
                  onChange={(e) =>
                    setEditItem({ ...editItem, title: e.target.value })
                  }
                  placeholder="Project title..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="image">Image Path</Label>
                <Input
                  id="image"
                  value={editItem.image ?? ""}
                  onChange={(e) =>
                    setEditItem({ ...editItem, image: e.target.value })
                  }
                  placeholder="/images/my-project.jpg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="linkText">Link Text</Label>
                  <Input
                    id="linkText"
                    value={editItem.linkText}
                    onChange={(e) =>
                      setEditItem({ ...editItem, linkText: e.target.value })
                    }
                    placeholder="View Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="href">
                    <span className="flex items-center gap-1">
                      URL <ExternalLink className="h-3 w-3" />
                    </span>
                  </Label>
                  <Input
                    id="href"
                    value={editItem.href}
                    onChange={(e) =>
                      setEditItem({ ...editItem, href: e.target.value })
                    }
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving || !editItem?.title} className="gap-1.5">
              <Save className="h-4 w-4" />
              {saving ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirm !== null}
        onOpenChange={(open) => !open && setDeleteConfirm(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong className="text-foreground">
                {deleteConfirm?.item.title}
              </strong>
              ? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteConfirm(null)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                deleteConfirm &&
                handleDelete(deleteConfirm.item, deleteConfirm.category)
              }
              disabled={saving}
              className="gap-1.5"
            >
              <Trash2 className="h-4 w-4" />
              {saving ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
