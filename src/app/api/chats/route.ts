import { prisma } from "@/app/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const chat = await prisma.chat.create({
      data: {
        message: body.message,
      },
      select: {
        id: true,
        message: true,
      },
    });

    return NextResponse.json(chat);
}

export async function GET(request: NextRequest) {
  const chats = await prisma.chat.findMany({
    select: {
      id: true,
      message: true,
    },
  });

  return NextResponse.json(chats);
}