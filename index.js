import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRoot } from "react-dom/client"


const app = express();
const PORT = 2000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// раздаем статические файлики
app.use(express.static(path.join(__dirname, "public")));

// перенаправление ссылок
app.get("/map", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/map.html"));
});
// app.get("/list", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/html/list.html"));
// });
// app.get("/waves", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/html/waves/waves_main.html"));
// });


const server = app.listen(PORT, () => {
    console.log(`Сайт запущен: http://localhost:${PORT}`);
});