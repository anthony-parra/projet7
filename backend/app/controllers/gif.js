const Gif = require('../models/gif');

// CRÉATION D'UN ARTICLE

exports.createGif = (req, res) => {

    if (!req.body) {
      res.status(400).json({ message : 'Erreur !'})
      }
        const gifObject = JSON.parse(req.body.gif);
        const gif = new Gif({
            ...gifObject,
            gifDownload: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        });
            Gif.create(gif, (err, data) => {
                if (err)
                    res.status(500).json({ message : 'Gif non crée !'})
                else res.send(data);
                });
     }

exports.deleteGif = (req, res) => {

    Gif.remove(req.params.gifId, (err, data) => {
        if (err) {
        if (err.kind === "Non trouvé !") {
            res.status(404).json({ message : 'Gif introuvable avec l\'id : ' + req.params.gifId})
        } else {
            res.status(500).json({ message :'Gif introuvable avec l\'id : ' + req.params.gifId}) 
            }
        } else res.json({ message : 'Gif supprimé avec succès !'}) 
    })
}