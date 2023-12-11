exports.getAll = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM usuarios", (err, result) => {
      if (err) return res.send(err);

      res.json(result);
    });
  });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  req.getConnection((err, conn) => {
    if (err) {
      console.error("Error de conexión a la base de datos:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
    conn.query(
      "SELECT * FROM usuarios WHERE username = ? AND password = ?",
      [username, password],
      (err, results) => {
        if (err) {
          console.error("Error al realizar la consulta:", err);
          return res.status(500).json({ error: "Error interno del servidor" });
        }

        if (results.length > 0) {
          const username = results[0].username;

          res.json({ message: "Inicio de sesión exitoso", username });
        } else {
          res.status(401).json({ error: "Credenciales incorrectas" });
        }
      }
    );
  });
};
