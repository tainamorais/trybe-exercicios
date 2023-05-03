CREATE DATABASE IF NOT EXISTS solid_example;

USE solid_example;

CREATE TABLE IF NOT EXISTS conta (
	id INT AUTO_INCREMENT,
  saldo DECIMAL(10, 2) NOT NULL,
  email VARCHAR(30) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pagamento_pix (
	id INT AUTO_INCREMENT,
  conta_id INT NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  descricao VARCHAR(255),
  chave_pix VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY pagamento_pix_conta (conta_id) REFERENCES conta (id)
);

INSERT INTO conta (id, saldo, email, tipo) VALUES (1, 1000, 'teste@trybe.com', 'corrente');