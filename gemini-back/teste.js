// const { GoogleGenerativeAI } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

// Acessando a API do Gemini via sua API Key
const genAI = new GoogleGenerativeAI("APIKEY");

// Instanciando o modelo
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Colocando o prompt
const prompt = "Você consegue me gerar uma imagem de computador";

// Enviando o prompt para o Gemini  e ESPERANDOO a resposta dele
const result = await model.generateContent(prompt);
console.log(result.response.text());