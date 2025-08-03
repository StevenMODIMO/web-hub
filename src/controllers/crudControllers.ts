import { query } from "../lib/db";
import { Request, Response } from "express";

export const getCruds = async (req: Request, res: Response) => {
  const cruds = await query("SELECT * FROM cruds");
  res.status(200).json(cruds.rows[0]);
};

export const getSingleCrud = async (req: Request, res: Response) => {
  const { id } = req.params;
  const crud = await query("SELECT * FROM cruds WHERE title = $1", [id]);
  if (crud.rows.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Crud not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      crud: crud.rows[0],
    },
  });
};

export const createCrud = async (req: Request, res: Response) => {
  const { title, description, image } = await req.body;
  const newCrud = await query(
    "INSERT INTO cruds (title, description, image) VALUES($1, $2, $3) RETURNING *",
    [title, description, image]
  );
  res.status(201).json({
    status: "success",
    data: {
      crud: newCrud.rows[0],
    },
  });
};

export const updateCrud = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const updatedCrud = await query(
        "UPDATE cruds SET title = $1, description = $2, image = $3 WHERE title = $4 RETURNING *",
        [title, description, image, id]
    );
    if (updatedCrud.rows.length === 0) {
        return res.status(404).json({
            status: "fail",
            message: "Crud not found",
        });
    }
    res.status(200).json({
        status: "success",
        data: {
            crud: updatedCrud.rows[0],
        },
    });
};

export const deleteCrud = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedCrud = await query(
    "DELETE FROM cruds WHERE title = $1 RETURNING *",
    [id]
  );
  if (deletedCrud.rows.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Crud not found",
    });
  }
  res.status(204).json({
    status: "success",
  });
};
