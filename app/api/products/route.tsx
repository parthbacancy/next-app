import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//We are not using request param in code but if we dont try to pass
//then Next.js will catch that API data
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Shirt",
      price: "700",
    },
    {
      id: 2,
      name: "Jean",
      price: "2000",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 10, ...body }, { status: 201 });
}
