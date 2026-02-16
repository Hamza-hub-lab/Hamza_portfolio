import { NextResponse } from "next/server"
import type { PortfolioItem } from "@/lib/portfolio-data"
import {
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  ACADEMIC_PROJECT_ITEMS,
  PERSONAL_PROJECT_ITEMS,
  CLUB_ITEMS,
} from "@/lib/portfolio-data"

// In-memory store for demo — in production you'd use a database
const store: Record<string, PortfolioItem[]> = {
  education: [...EDUCATION_ITEMS],
  experience: [...EXPERIENCE_ITEMS],
  "academic-project": [...ACADEMIC_PROJECT_ITEMS],
  "personal-project": [...PERSONAL_PROJECT_ITEMS],
  club: [...CLUB_ITEMS],
}

export async function GET() {
  return NextResponse.json(store)
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { category, items } = body as {
      category: string
      items: PortfolioItem[]
    }

    if (!category || !Array.isArray(items)) {
      return NextResponse.json(
        { error: "Invalid payload: category and items required" },
        { status: 400 }
      )
    }

    store[category] = items
    return NextResponse.json({ success: true, category, count: items.length })
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { category, item } = body as {
      category: string
      item: PortfolioItem
    }

    if (!category || !item || !item.id) {
      return NextResponse.json(
        { error: "Invalid payload: category and item with id required" },
        { status: 400 }
      )
    }

    if (!store[category]) {
      store[category] = []
    }

    const existingIdx = store[category].findIndex((i) => i.id === item.id)
    if (existingIdx >= 0) {
      store[category][existingIdx] = item
    } else {
      store[category].push(item)
    }

    return NextResponse.json({ success: true, item })
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const id = searchParams.get("id")

    if (!category || !id) {
      return NextResponse.json(
        { error: "category and id query params required" },
        { status: 400 }
      )
    }

    if (store[category]) {
      store[category] = store[category].filter((item) => item.id !== id)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
