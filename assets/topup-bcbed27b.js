import{a as s}from"./api-77cd4ed9.js";async function u({limit:e=10,page:t=1,states:a}){return await s.get("/topup_requests",{params:{limit:e,page:t,states:a}})}async function n(e){return await s.put(`/topup_requests/${e}/approve`)}async function p(e,t){return await s.put(`/topup_requests/${e}/decline`,{reason:t})}async function i(e,t){return await s.post("/topup_requests",{quota:e,issuerId:t})}export{n as a,p as d,u as l,i as r};
