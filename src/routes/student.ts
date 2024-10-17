// routes/usuarios.ts
import { Router } from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student";
import validate from "../middlewares/validate";
import { studentSchema } from "../schemas/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

// Crear un alumno nuevo en la BD
router.post("/", validate(studentSchema), createStudent);

// Actualizar un alumno de la BD
router.put("/:id", validate(studentSchema), updateStudent);

// Eliminar un alumno de la BD
router.delete("/:id", deleteStudent);

export default router;
