import{a}from"./api-77cd4ed9.js";async function u({states:s,limit:e=10,page:t=1}){return await a.get("/issuers",{params:{states:s,limit:e,page:t}})}async function n(s){return await a.post("/issuers",s)}async function i(s){return await a.delete(`/issuers/${s}`)}async function c(s,e){return await a.put(`/issuers/${s}`,e)}export{n as c,i as d,u as l,c as u};
