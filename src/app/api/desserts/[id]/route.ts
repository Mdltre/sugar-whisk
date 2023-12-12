import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { Prisma } from '@prisma/client';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const dessertFound = await prisma.dessert.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    if (!dessertFound)
      return NextResponse.json({ message: 'Dessert not found' }, { status: 404 });
    return NextResponse.json(dessertFound);
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

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedDessert = await prisma.dessert.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedDessert)
      return NextResponse.json({ message: 'Dessert not found' }, { status: 404 });

    return NextResponse.json(deletedDessert);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          {
            message: 'Dessert not found',
          },
          {
            status: 404,
          }
        );
      }

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

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, description, imgSrc } = await request.json();

    const updatedDessert = await prisma.dessert.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name,
        description,
        imgSrc,
      },
    });

    return NextResponse.json(updatedDessert);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          {
            message: 'Dessert not found',
          },
          {
            status: 404,
          }
        );
      }

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
