import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

interface ViewData {
  [key: string]: any;
}

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: ViewData = {};
    viewData["title"] = "Home";
    res.render('home/index', { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: ViewData = {};
    viewData["title"] = "About";
    res.render('home/about', { viewData: viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: ViewData = {};
    viewData["title"] = "Contact";
    res.render('home/contact', { viewData: viewData });
  }

  static showBooks(req: Request, res: Response): void {
    const viewData: ViewData = {};
    viewData["title"] = "Books";
    viewData["books"] = books;
    res.render('home/books', { viewData: viewData });
  }

  static show(req: Request, res: Response): void {
  const idParam = req.params.id;

  if (typeof idParam !== 'string') {
    res.status(400).send('Falta el id del libro');
    return;
  }

  const id = parseInt(idParam);
  const book = Book.findById(books, id);

  if (!book) {
    res.status(404).send('Libro no encontrado');
    return;
  }

  const viewData: ViewData = {};
  viewData["title"] = book.title;
  viewData["book"] = book;
  res.render('home/show', { viewData: viewData });
}
}