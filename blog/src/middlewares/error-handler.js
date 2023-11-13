export default (err, req, res, next) => {
  console.log(err.message);
  // console.log(err.status)

  const status = err.status ?? 500;

  const message =
    err.status < 500 || process.env.NODE_ENV === "development"
      ? err.message
      : `Server Error: Please call to admin.`;

  if (req.url.startsWith("/api")) {
    res.status(status).json({
      code: status,
      message,
    });
  } else {
    res.status(status).render("error", {
      title: `Error ${status}`,
      content: message,
    });
  }
};
