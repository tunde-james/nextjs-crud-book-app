import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const { title, date } = body;

  //save the book to the database
  const post = await prisma.book.create({
    data: {
      title,
      date,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
