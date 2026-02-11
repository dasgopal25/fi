const Provider = require("../models/Provider");
const RedisClient = require("../config/redis");

exports.getProviders = async (req, res) => {
  try {
    const { serviceType, nearPlace } = req.query;

    const cacheKey = `providers:${serviceType || "all"}:${nearPlace || "all"}`;

    const cached = await RedisClient.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }

    let query = {};

    if (serviceType) query.serviceType = serviceType;
    if (nearPlace) query.nearPlace = nearPlace;

    const providers = await Provider.find(query).select("-password");

    await RedisClient.set(cacheKey, JSON.stringify(providers), { EX: 60 });

    res.json(providers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
