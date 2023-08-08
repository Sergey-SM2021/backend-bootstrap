import { ProfileService } from "../servicecs/profile.js";

class Profile {
  async getProfile(req, res) {
    const id = req.query.id;
    const data = await ProfileService.getProfile(id);
    res.send(data);
  }

  async updateProfile(req, res) {
    try {
      const id = req.params;
      const profile = req.body;
      await ProfileService.updateProfile(profile, id);
      res.send(id);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export const ProfileController = new Profile();
