import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { usersTable } from '@/db/schema/user.schema'

export async function GET(request: NextRequest) {
    try {
        const users = await db.select().from(usersTable)
        return NextResponse.json(users)
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
    }

}