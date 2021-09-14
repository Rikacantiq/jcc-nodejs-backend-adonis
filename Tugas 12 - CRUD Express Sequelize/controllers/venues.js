const { Venues } = require('../models');

class VenuesController {
	static async findAll(req, res) {
		const venues = await Venues.findAll();
		res.status(200).json({ status: 'success', venues });
	}

	static async insertData(req, res) {
		const { name, address, phone } = req.body;
		await Venues.create({ name, address, phone });
		res.status(201).json({ status: 'success' });
	}

	static async findById(req, res) {
		const id = req.params.id;
		const findById = await Venues.findAll({ where: { id } });
		res.status(200).json({ status: 'success', findById });
	}

	static async updateById(req, res) {
		const id = req.params.id;
		const { name, address, phone } = req.body;
		if (name) {
			await Venues.update({ name }, { where: { id } });
		}
		if (address) {
			await Venues.update({ address }, { where: { id } });
		}
		if (phone) {
			await Venues.update({ phone }, { where: { id } });
		}
		res.status(201).json({ status: 'success' });
	}

	static async deleteById(req, res) {
		const id = req.params.id;
		await Venues.destroy({ where: { id } });
        res.status(201).json({ status: 'success' });
	}
}

module.exports = VenuesController;
