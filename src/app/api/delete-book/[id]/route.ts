import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;

  // Delete the book from the database...
  const book = await prisma.book.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json('Deleted', { status: 200 });
}
