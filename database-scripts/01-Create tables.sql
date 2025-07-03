-- drop database sena;
-- create database sena;
use sena;

/*
create table if not exists tb_tipo_documento(
    id int not null PRIMARY KEY auto_increment,
    tipo_documento varchar(5),
    descripcion varchar(500)
);
*/

create table if not exists tb_departamento(
    id int not null PRIMARY KEY auto_increment,
    nombre varchar(800)
);

create table if not exists tb_municipio(
    id int not null PRIMARY KEY auto_increment,
    id_departamento int not null,
    nombre varchar(800),
    estado TINYINT(1),
    FOREIGN KEY (id_departamento) REFERENCES tb_departamento(id)
);

create table if not exists tb_personas_club(
    id int not null PRIMARY KEY auto_increment,
    tipo_documento varchar(10) not null,
    numero_documento varchar(500) not null,
    id_municipio int not null,
    nombres varchar(500) not null,
    apellidos varchar(500) not null,
    fecha_nacimento date,
    tipo_rh varchar(100),
    peso float,
    altura float,
    correo varchar(500) not null,
    numero_telefono varchar(100),
    talla_camisa varchar(100),
    talla_calzado varchar(100),
    talla_pantaloneta varchar(100),
    genero varchar(200),
    direccion TEXT,
    FOREIGN KEY (id_municipio) REFERENCES tb_municipio(id)
);

create table if not exists tb_usuarios(
    id int not null PRIMARY KEY auto_increment,
    usuario varchar(5000),
    contrasenia varchar(5000),
    activo boolean,
    id_persona int null,
    FOREIGN KEY (id_persona) REFERENCES tb_personas_club(id)
);

create table if not exists tb_entrenadores(
    id int not null PRIMARY KEY auto_increment,
    id_persona_club int not null,
    fecha_ingreso date,
    activo boolean,
    contrato blob,
    FOREIGN KEY (id_persona_club) REFERENCES tb_personas_club(id)
);

create table if not exists tb_contactos_emergencia(
    id int not null PRIMARY KEY auto_increment,
    tipo_documento varchar(10) not null,
    numero_documento varchar(100) not null,
    id_entrenador int,
    nombres varchar(5000),
    apellidos varchar(5000),
    correo text,
    telefono text,
    FOREIGN KEY (id_entrenador) REFERENCES tb_entrenadores(id)
);

create table if not exists tb_tutores(
    id int not null PRIMARY KEY auto_increment,
    tipo_documento varchar(10) not null,
    numero_documento varchar(100) not null,
    nombres varchar(5000),
    apellidos varchar(5000),
    correo text,
    telefono text
);

create table if not exists tb_categorias(
    id varchar(100) not null PRIMARY KEY,
    nombre text
);

create table if not exists tb_deportistas(
    id int not null PRIMARY KEY auto_increment,
    id_tutor int,
    id_persona_club int not null,
    id_categoria varchar(100),
    activo boolean,   
    FOREIGN KEY (id_tutor) REFERENCES tb_tutores(id),
    FOREIGN KEY (id_persona_club) REFERENCES tb_personas_club(id),
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id)
);

create table if not exists tb_desercion_deportistas(
    id int not null PRIMARY KEY auto_increment,
    id_deportista int not null,
    fecha_desercion date,
    razon varchar(800),
    descripcion text,
    FOREIGN KEY (id_deportista) REFERENCES tb_deportistas(id)
);

create table if not exists tb_pagos_deportistas(
    id int not null PRIMARY KEY auto_increment,
    id_deportista int not null,
    fecha_pago date,
    valor decimal(10,2),
    tipo_pago text,
    FOREIGN KEY (id_deportista) REFERENCES tb_deportistas(id)
);

create table if not exists tb_cargos_admin(
    id int not null PRIMARY KEY auto_increment,
    nombre varchar(1000)
);

create table if not exists tb_gestion_admin(
    id int not null PRIMARY KEY auto_increment,
    id_tutor int null,
    id_deportista int null,
    id_cargo int,
    fecha_inicio date,
    fecha_fin date,
    activo boolean,
    FOREIGN KEY (id_tutor) REFERENCES tb_tutores(id),
    FOREIGN KEY (id_deportista) REFERENCES tb_deportistas(id),
    FOREIGN KEY (id_cargo) REFERENCES tb_cargos_admin(id)
);
