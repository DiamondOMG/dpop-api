// src/app/api/dpop-receiver/route.js
export async function POST(req) {
	try {
		// ตรวจสอบว่า request body มีข้อมูล
		if (!req.body) {
			return new Response(
				JSON.stringify({ error: "Request body is missing" }),
				{
					status: 400, // Bad Request
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// พยายามอ่าน body ที่เป็น JSON
		const dpopData = await req.json();
		console.log("Received DPoP Data:", dpopData);

		// ส่งกลับ 200 OK พร้อมข้อมูลที่ได้รับ
		return new Response(
			JSON.stringify({ message: "DPoP data received", data: dpopData }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Error in POST request:", error);

		// ตรวจสอบว่าเป็น error ที่เกิดจาก JSON หรือไม่
		if (error instanceof SyntaxError) {
			return new Response(JSON.stringify({ error: "Invalid JSON format" }), {
				status: 400, // Bad Request
				headers: { "Content-Type": "application/json" },
			});
		}

		// จัดการกับ error อื่น ๆ ที่อาจเกิดขึ้น
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500, // Internal Server Error
			headers: { "Content-Type": "application/json" },
		});
	}
}

export async function GET() {
	return new Response("Method GET is not allowed", { status: 405 });
}
