import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: { id: number };
  }
) {
  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Parth" });
}

export async function PUT(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: { id: number };
  }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({
    id: 1,
    name: body.name,
  });
}

export function DELETE(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: { id: number };
  }
) {
  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({ data: "Deleted Successfully" });
}
