export const showAllController = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "api is working",
    });
  } catch (error) {
    console.log(error);
    res.send("internal error");
  }
};
