const { transaksi } = require('../models');

class TransaksiController {
  static async list(req, res) {
    try {
      let transaction = await transaksi.findAll({
        order: [['id', 'asc']],
      });

      res.json(transaction);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, alamat, tanggal, jumlah, total_harga, itemId } = req.body;
      let transaction = await transaksi.create({
        name,
        alamat,
        tanggal,
        jumlah,
        total_harga,
        itemId,
      });

      res.json(transaction);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let transaction = await transaksi.destroy({
        where: { id },
      });

      transaction === 1
        ? res.json({
            message: `data from id ${id} has been deleted!`,
          })
        : res.json({
            message: `data from id ${id} has not been deleted!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, alamat, tanggal, jumlah, total_harga, itemId } = req.body;

      let transaction = await transaksi.update(
        {
          name,
          alamat,
          tanggal,
          jumlah,
          total_harga,
          itemId,
        },
        {
          where: { id },
        }
      );

      transaction[0] === 1
        ? res.json({
            message: `id ${id} has been updated!`,
          })
        : res.json({
            message: `id ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async information(req, res) {
    try {
      const id = +req.params.id;
      let transaction = await transaksi.findByPk(id);
      res.json(transaction);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = TransaksiController;
