const schoolService = require("../services/schoolService");
const calculateDistance = require("../utils/distance");

exports.addSchool = async (req, res, next) => {
  try {
    const result = await schoolService.createSchool(req.body);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      schoolId: result.insertId
    });
  } catch (error) {
    next(error);
  }
};

exports.listSchools = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude required"
      });
    }

    const schools = await schoolService.getAllSchools();

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude
        )
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json({
      success: true,
      count: sortedSchools.length,
      data: sortedSchools
    });

  } catch (error) {
    next(error);
  }
};