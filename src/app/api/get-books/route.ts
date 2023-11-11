import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  // Get all books from database
  const books = await prisma.book.findMany();

  return NextResponse.json(books, { status: 200 });
}
