export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, email, branch, service, message } = body;

    if (!name || !phone || !email || !branch || !message) {
      return Response.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      name,
      phone,
      email,
      branch,
      service,
      message,
    });

    return Response.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}