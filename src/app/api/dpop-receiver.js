export default function handler(req, res) {
	if (req.method === "POST") {
		const dpopData = req.body;

		// บันทึกข้อมูลที่ได้รับ
		console.log("Received DPoP Data:", dpopData);

		// ส่งกลับ 200 OK
		res.status(200).json({ message: "DPoP data received", data: dpopData });
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
