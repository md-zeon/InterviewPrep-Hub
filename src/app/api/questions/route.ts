import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db(); // use default DB from URI
		const questions = await db
			.collection("questions")
			.find({})
			.sort({ createdAt: -1 }) // newest first
			.toArray();

		return NextResponse.json(questions);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}

export async function POST(req: NextRequest) {
	try {
		const client = await clientPromise;
		const db = client.db();
		const data = await req.json();

		const result = await db.collection("questions").insertOne({
			...data,
			createdAt: new Date().toISOString(),
		});

		return NextResponse.json({ success: true, id: result.insertedId });
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
