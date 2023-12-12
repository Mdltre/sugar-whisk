import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET() {
  try {
    const desserts = await prisma.dessert.findMany();
    return NextResponse.json(desserts);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  const { name, description, imgSrc } = await request.json();
  try {
    const newDessert = await prisma.dessert.create({
      data: {
        name,
        description,
        imgSrc,
      },
    });
    return NextResponse.json(newDessert);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
