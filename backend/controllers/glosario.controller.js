const Glosario = require('../models/glosario');

const glosarioCtrl = {};

glosarioCtrl.getGlosarios = async (req, res) => {
  var id = req.param('docente')
  const glosarios = await Glosario.find({ docente: id })
  res.json(glosarios);
}

glosarioCtrl.createGlosario = async (req, res) =>{
  const glosario = new Glosario({
    title: req.body.title,
    description: req.body.description,
    docente: req.body.docente
  });
  await glosario.save();
  res.json({
    'status': 'Glosario Guardado'
  })
};

glosarioCtrl.getGlosario = async (req, res) => {

  const glosario = await Glosario.findById(req.params.id);
  res.json(glosario);
}

glosarioCtrl.editGlosario = async (req, res) => {
  const { id } = req.params;
  const glosario = {
    title: req.body.title,
    description: req.body.description
  };
  await Glosario.findByIdAndUpdate(id, {$set: glosario}, {new: true});
  res.json({status: 'Glosario Actualizado'});
};

glosarioCtrl.deleteGlosario = async (req, res) => {
  await Glosario.findByIdAndRemove(req.params.id);
  res.json({ satus: "Glosario eliminado"});
}

// glosarioCtrl.createGlosario = async (req, res, next) => {
//   const glosario = new Glosario({
//     title: req.body.title,
//     description: req.body.description
//   });
//   await glosario.save();
//   res.json({
//     'status': 'termino guardado'
//   });
// }
//
// glosarioCtrl.getGlosario = async (req, res, next) => {
//   const glosario = await Glosario.findById(req.params.id);
//   //Glosario.findById();
//   res.json(glosario);
// };
//
// glosarioCtrl.editGlosario = async(req, res, next) => {
//   const { id } = req.params;
//   const glosario = {
//     title: req.body.title,
//     description: req.body.description
//   };
//   await Glosario.findByIdAndUpdate(id, {$set: glosario}, {new: true});
//   res.json({status: 'termino actualizado'});
// };
//
// glosarioCtrl.deleteGlosario = async (req, res) => {
//   await Glosario.findByIdAndRemove(req.params.id);
//   res.json({status: 'Termino eliminado'});
// };

module.exports = glosarioCtrl;
