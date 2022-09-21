import{d as b,r as _,o as m,c as F,w as c,a as o,b as C,u as j,e as R,f as B,v as P,g as a,h,F as X,i as Q,t as p,j as T,k as l,n as L,l as g,m as V,p as k,T as N,q as O,s as M,x as D,y as H,z as J}from"./vendor.79f0d65f.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}};G();const W=["src","alt"],y=b({props:{imgPath:null},setup(i){return(t,s)=>{const n=_("router-link");return m(),F(n,{to:"/"},{default:c(()=>[o("img",{src:i.imgPath,alt:i.imgPath},null,8,W)]),_:1})}}});var u=(i=>(i.zh="zh",i.en="en",i.th="th",i))(u||{});const f=C(u.th);function K(){const{locale:i}=j({useScope:"global"});function t(n){f.value=n,localStorage.setItem("lang",JSON.stringify(n)),i.value=n}function s(){var r;switch((r=localStorage.getItem("lang"))==null?void 0:r.replaceAll('"',"")){case"en":f.value=u.en;break;case"zh":f.value=u.zh;break}i.value=f.value}return R(()=>{s()}),{currentLang:f,switchLang:t}}const q=["value"],E=b({setup(i){const{currentLang:t,switchLang:s}=K();return(n,r)=>B((m(),h("select",{class:"rounded-md bg-gradient-1 text-yellow-500 font-[700]",name:"",id:"","onUpdate:modelValue":r[0]||(r[0]=e=>T(t)?t.value=e:null),onChange:r[1]||(r[1]=e=>a(s)(a(t)))},[(m(!0),h(X,null,Q(a(u),e=>(m(),h("option",{key:e,value:e},p(e),9,q))),128))],544)),[[P,a(t)]])}});var Z="./assets/amazing-games 1.6cb039f3.png",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATSSURBVHgB7ZltaFtVGMef59xzkybpqqt0Kr7Q+cUPha0ypcx2dc6qsLlNwfRF0TqROUGRzrmmnWhgtqk62RDfxVGVbU36oVNRV3Q2TXVlMPFt+sEPsiKCClrbdX3JzT2P51Zju9zbNTc3DfmQH4Sb89znnPP8c87JeQNwSGdsWxk4IEhBFhjatBwcwsAhZ+nc3j1R/12QIZOx03eC8HWCQxwLYZyHdIahXf33+cAmRmswYEEFmGMhHBzSUX14JDBQf5S7480y+WrS3v5Z06XMJ0pJU5YBQ0ZI02IZjHStOjya9JmO/dhCiJ901Pb8Ag5ByAItJ/ylRRr7kimwjQRuBKCtBFAuX5WcVxnCJBF8D8gGhKAPGYqXxuPa7a/U9f0JDnHcIgZFM2IFKiwuBAxLEQv6SRFe+agCElUMIYCA3xUz15XS5liI4zHSGmt6DBR+Uoa/Cmxi5GGcTrbF6tvBIY66VttQw+symochC8hu92JHTfhJ+aRM8iuQIW3Rpt2AFEim3YpXRqDLT3pxqMwNHFXQKZE03Xh8pEL5ovuHAciAjLpWYODu9cBEKJle7i6DJ27YDzsqn027jOaK3fD4mhegxFU6Z0RsbY81boIMsC3EmC+Ywrvn5zXagEjMjuZ08akl4OE+UJg636zKcg5EIn7bPcX2GGkfbLifEN5JtXt5sexYAmYSk2mVoyouUNEFk4kJ80sdHwrd3PM22MB2iwjAHVZ2I6B0RRhoetxahIQY3AM2sdUiLRG/x3MZG6cszT8XQh/1lTy/9eDZdP3ttYhPVORChIHmGbvWjr+toBQOl8uGdzwLp1UXGXWlz4JCnhps2qCTqARGP4dqI0cN28gY61/pK14JOWD8Ej5tPLef2q6WTozewRCvEYx91bWuJ2rlbzlG5H/5a3JimxvUBKcmzo3XqFi0xe1zvQs5QJuh5n23RiIyliEZS03SLggOPHdTuCXV3ySk9fOG1YzDNyZHYg3xaY2pHuUI5ABtSm9yFRnLf3Yo9R1PQOXeDeFv59tMg13otMaqYF3XV0OO0XWssLJrhNel2kxCFC6s/8mIHK+UbbNgnWQa27kPbokoCMk3CkLyjYKQfKMgJN8oCMk3zItGpvxl5ahwZr3BXkKQ4d9WdkHCZDcJ8fouOiYLOHNegQAJ4cJDkGPQi33yMZVi/s178fKPU31NQoLXvzkpNx+bZfDHZVHjclP1tfTa0rW25wzkmFBV+Ce5M7x3NgaAMfk9yjm/bTbGFCy3up3V4dPyUQd5QMe6HqNV+hbzszXYCUQCcgQyptnxtyVExJXh2ZPqpUbWQV73kJ0stoTs39z7qxz5uwAyO/pPE2Nf+My+6vf+sJMpo/uRp2ONt2iIdQyp2EjLa7RHrfzk/v8Nrv7bRUgXXN4XWh63MoYv/1dOXKY+CNUeGQSbZOUOsS3WYNlCwwd/90S7o7PnU+sfKC9a+2DVlJVfqDbsOI7CEiXfKAjJNwpC5kOCzFdVRDNlG8vmZufycmNVIEx+AkYhC2SnRRDfSjWRwGO99b3/rwKiwWgCAU0n+aTgouuodMiKkBWqaJMFvS8v+41ffUZeA3zEFO2RVD+BbKecMPrlVykQp9HIQ54A5BstJ/xXBD/1Xw2LTLQ7Bxuv2iM/kEX+AaB8l4E2o3DnAAAAAElFTkSuQmCC",nn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALQSURBVHgB7ZpLbExRGID/oUI8SiKCSmiJducRC2xY1IoFIo2E2AkWwsKGNEUiFlZsJCxYWTSx0AgS8YqKjaKi0SiJ0TQWRFqlEpF0ju/kjkUncx53emfO3Ga+5MtZnEf//54z5545U5EaNaYeSqmteAlf4WpJGwS9EV+riTRLmiDgDlWceZIWCPaMIYl+SQsEu12ZOSFpgECnY9aQxBDOlTRAoAcss7FL0gLBdhmS6JA0QcDDBQnk8JSkjXzg/+nBDZIwdTIJCGgJxSZswL/4Et9mMplcQdN2/I0PqevP911IsQ1X4iz8ie+xmza/pNwQQB0ewT7Duh/Fa9iKmYK+i/A4vlBm9Ow9wjYpFwy+WZm30WJ8xat4Fp+oiUvMh25slCRhwGMlBJIEg7hKkoCB9quwZLFeJgMDNOKYCscI7nPF6bNrXcQ5EoYhbGUX++hqmLFV8iTWUryRMOgtfB1J9Pk0nuaoPyThuOCbhMY1I18ketlVmj+4lER++HYwzghJLJYwSWjuxElCY1taayQcvRITWyIrJBzfJSa2RGZKOHIx21sTiT1YgsyXmNgSGZFwxL7jsiUyIOHYqQq+AriwJfJBwqG3/r1xOrheiIMUyyUMn3G97/vEdUR5IOFoxBu+S8yVyFMJyw68rTzuhV1LS98ADuMMCUsWj7LM7pkaWGeEjmMUtyQ8TXiXB7vF1MC1tDTXpTrQJ/FnpkpnIszKfYpquPa/TCzKVOkzI5pzEpZRvGJr4JUIT6KTokfCcZ4YrEcm72MAH7QWiZaY7ywmxSdsJpFxWyPvoBhIn71OS+VpcyVREiq6l60U7VIuGLxBxbv/LZUuKTf8kSYV3cmWi16szKWgiq5SBwyBjKvo57bD2IL1uEBF/yhwMh+oCX1QnC0xifXlpUgyerM4iHtwGb7D59jJB/Sbo6++pdmN+jZT/+ijd8Sb9HssNWpUD/8AWkNXr00gWBAAAAAASUVORK5CYII=",rn="./assets/Artboard 1 1.45c43597.png",tn="./assets/Artboard 1 2.56d7b278.png",en="./assets/Artboard 1 3.0918852d.png",on="./assets/BA 1.bf97a7ab.png",an="./assets/caishen-a2 1.a17302a4.png",sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBtVSLEYIwDH1wDsAIbCAbCBOoG+gEsoE6ghu4gWwgI7iBbAAb1ESC9JBSvu8uF9Kkr78XgAaUUrEqcYABlPM4L3VxM++2zNmK92GA4zgFuVDC9V+eVvLJnzWSgMwjy8RMaKtjf2XSNzp2NQIpkyrMDBcLYBHSlfZ9I0swHiHKB/9qTtl0KXU7S77Srep1fFnwQf7Sp961kHHnhKiOBZw45vFRpLKrnOyJWseexHlbe1pJCXeYO4rHk8Gk1N8ZuciQjiQ/jFRQYARspIH4lOyI+jr8zlk2ndJ40BVr4/11Snf36orboLfpZuIPa/NbmIhYix7mQ8bH1x9gKlgt+w9aYZn4IW6quQAAAABJRU5ErkJggg==",dn="./assets/Dialy Promotion 1024x1024 1.27d02f15.png",ln="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgB7ZLhEYIwDIWD5wAdATdgBNyAEdgEnMBzAkdxBNmAboAbxFQfdwGVVK/+47vrQcPrI0lDFAEzn/nJkVIgRjlPya0zG/oDq+lqqpA5dLIqax6hK825hbDHkPcY/Jfhx9I6Z5lqBmStqRDXOCvblr+jpRhEWEca1p8MGgiuugx5L96UORLipdKGHl/wraGlP/P0QkbCvpjpdN+HxTnNsszLYy/LI/TYS7ybSfVFuS0ZwHiH7Lzsb9YZ01SZd9Ha0ARKTOipWc4vpidKR0jwcAfSwIU6sNRBhAAAAABJRU5ErkJggg==",pn="./assets/dream-of-macau_casino lady4 1.e33d75d2.png",cn="./assets/enterFG_fighter_red 1.045969d9.png",wn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD7SURBVHgB7ZaBDYJADACLcQBG0A10A53AFdgAnUAdgQkMk+gGsAFsIBvUVt9Ey/NA/Tcx8ZLC8yk9oDwBgEDElKJC/xQUCTsiMzhBWHYsKmiwgLDULEL4AlP4jIYiN/vazPHTSVuZqOfQZbcla0XOl8d2grZHyyiKSpdIzml61EgJ1eWeJBRx10maO6pJNBeiq0vCTMAPcV+CRtSAgjE9yuB9vbxyFMf7VgYOo4IRoOUD7atHkpmc8C6ii5/Z5of2KKYCKzO2rSP+vj3fvI2tgGYdXUi0FqLeGqF69Bf9qKiE8JQsyiE82X1LyyDBx8/eEM6yiiO3othyzg1aZMc86LPnhwAAAABJRU5ErkJggg==",gn="./assets/fortune-ox_4 1.2daaa0a5.png",mn="./assets/header-logo 1.4255f340.png",hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgB7ZPdDcIwDIRdxACMkJHCBIVJApuwQUcoG8AGERPABocjQISUhvy4feKT3Mqt7Yt8ClEGABRHjwfurWgKeHDLccUnLt+QJDzQII6hWnjIylvbLzpXTyU8/bHIwyLXR27QGPqTiuvTqUIGMpiYiPOngyxDH1HmTyoWLx9R50+OoG74sQs2Wn9n3uz9pAn/umOQEA3j5wuakSXlceC4eLniaKmUiMn9SP1prCGslVjjLbVwVs/+YpOJHUmGc4rY9lthgdA6/HgHvWyyyxBLkDgAAAAASUVORK5CYII=",bn="./assets/HOW TO 1.0c659bb8.png",xn="./assets/ia_100000469 1.09a3abb8.png",fn="./assets/ia_200000002 1.8eddc533.png",un="./assets/ia_200000008 1.71c24ad0.png",yn="./assets/image 1.d0a8b3fa.png",An="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBvZaBdYIwEIaPTpANxA3sBOoGOIE6gW6gbqATqBNQJ4AN0Al0A9ggvT81KVhDQhH/9+694wz5cpdLhIglpQzZErZcvlYx5gYjuDsZm6BuVLB9AhSzE1G3SgGS1L2KD+eIoqDdbkeTyYT6/T4FQaAM/ng8puPxSLfbzTWNINsu5nku1+u1FEIgY6fNZjN5vV6tXfEUhBfCMPQClA3v2GD0KogL9gfUBqJtNBrVg/b7fWuItjiO7aAoisxA+GgG/ZwkiRwMBjLLMtUgMMQwTmu73VqzqrR3mqa//SgE9Xo988wlVTGGEWeufB07nU6q3XlhZvz5fC5PTRUQzoxLGAPAcrk0seFwSJwdcYtb56qAMIEPaD6f03Q6NbHL5aJih8PBxJCpN4jrrFZaXj2Esmw2G/OMEq9Wq0pGKHFFtq5Dm2OjceLhY3MRR0PoMfDRFPgNVj4amKvzc4Q5as8RpNu3DcTrZtCw/2SGBeLdZ7Le3lgV9qdJJjZILagM5K5Tm20rad2t7Q16lO4+bYvFQv13uQRQoy8fDUJ2jxenC5TIBsLZ8c2ipK+3fW4pT/58QPrXwU9IObknQt/llPdw+EapVQAAAABJRU5ErkJggg==",vn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAALCAYAAADr7wSxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBpVSLVcMwDHR5DNANSCcgmYAyATBBYYKGCZJO0DJBygQtE6RM0HSCuhOQDYIunB9qiBMgeu+ePzrZZ9mWqapqKdgLxqbFZP5ecBTEai4nxi38jV5P2oTxTfzYE2Py4XOGfiYINNHZo0d0Sn/Ocahisha+s6k6oM+mKi7kYT4EK+gh1uqgIbiX5u+ms4NF7Wg0Wvwibit4UWPEWQoOpNlwPhKUgpDjmHvCjwRM/iO6aSmFv/bwDsLZeXyJIBBMON5zDLOCBwLz6VDRlovjOt9d5jw2E85ZrPDX7COra8TjDXMuYosnmIkvEh8SczdUNE6/oXBc3W0Lxz0ncBLtEH4hYgpyTuoAC84bCl3Sh7n5UNF4exDqrnNv/KILwtnJCaPdsN2Zr1vBH7Dcw7B6gVMOftO8UmQ8N+eftGlvwk09PmQz4Yd84lr6mVjzne3FhQq8RpBCl4Cm8J00zz20q471VxSWcz18SNxghNtQ40l9cH8JreviuKdOB1oVa2qzTh879ghVbKC4GfeN2Y/1Psj01pOZUk5VMgOwA1vr0FItsHihODBfKSyJ2rAWM4rnEQhmgjn7pQ78BDTL77XE2btOAAAAAElFTkSuQmCC",kn="./assets/lobby-bg 1.655dff23.png",_n="./assets/lobby-mbg 3.f8ad5086.png",Cn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgBvVaBccIwDFQ7QUbICHQC2ICMwAhsABsAE8AGkAnCBs0GyQbJBq7eRZzs2E56Dfydjpyx/yVZlk3EMMbkbBVbZ+bFFdzQ+Hh8fLNl9Br0bF8QuvJHQa/FHUJmdNb9TmVZUl3X1LatHcvznBaLBa3Xa1qtVmMUPaUSXFWVYRI4kjQWNU3TJDcrKnQ8HoOkWZZZ4tB/+/3+b0JY4JPvdjvH667rzPl8HojCwUlCIIulBcSbzcYURWEul4sVg/FeOWuQ8lEh30NZ5JOJEyKGqGUc+5oUAqkmkgWSSkSE6LQoIgMQaSqqT12DKGENlC9wu91sCTOZLWuYQJd7issRwjkJoe97h0jP45Q956S4HCHxzp+MSHBoZUzPWy6XQWKfyxHyAfLT6WRTKGnUhFx9dhyk4kgUesNiXQAVJecDFYaN3263z7L3C4EClecIYTFF2oxUkT79IhqaD67J5a0j0v+n2hBFyntwYEPpkzSkIibvIPsYCIWighDSNBaFWKiTB5vq4XBwFqIT+I02Zmi+IUSvCSyYQqwNDsaQvPiQginpQmpDHVsDV3lHIw+TGa5y+wqq+Hd85v9Qvu25Zb/M7wPyauYFHqPVIxD6AeEytbTCpCD8AAAAAElFTkSuQmCC",zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAYAAACtpZ5jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBtVMxS8NQGLwXtKAdWgf3/ISgTt38DY7OIm7i5pT+g4IuSodOujo6dhIXJf6DdFQr1KAk2GrOe7GiVGwTaw+O73Hv7hLe4wGzAsk5cVksYUp86zKOMebVauKqhEX8EcPsml2qk44VtXjQSMQNGaooCGUqNiu+DLvgfG5KuNG4FXeK/Lm8ZY098U4dwTjjtthE/uKmuDmqO6OCvnqsEcl8gMmlhxqPypwgD+w5M40Cstv43dP1mT4FKAoyqLJ/HXJw4f/YG1z67F+FZFj4oj8KkjOX8WnIuLX7pbX8TEvO3XFZg4nlDRdvURtpXM9uJC3XMV9aNwv7namKs/Lelgc8t5E9pMqKWTrq4L/A+5rHXs3L638H3EGYBuCKkOsAAAAASUVORK5CYII=",Sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgBrZBBDcAgDEV7mIBJwMmQgoQ52JwgYRKQMgmT0P2GlIQDtAde8sOBF/gtMfNOHiBmJHnEwpUXiR5RkR+CR1Surv9E1DpJvI3mBCRDPqwXv7aRgSjCbXUs1tRyxmFbXD7ISav4AU+D4bAyjGN4AAAAAElFTkSuQmCC",Rn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABuSURBVHgBjdGBCYAgEAXQCxqgEdqk2sQNGqE2qU1uFEdohN+PMkRL78MpwvPAU8SYpgYAzNymEhhZijv6BfoIIIM8dKyFdSCPBuR+wAtbLhutE0uejr7UMb2wmmD06r0Kkzn6AC0/47gNYsk14xPoVdfeVpapGQAAAABJRU5ErkJggg==",Bn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAATCAYAAADSz14iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALASURBVHgBnVdNSFRRFL6TFlJRE1IhBTMrwY21MBhaDIm4EAJbjWQQIoRFQbYqIqhFRS1aVlAEA4UQ/UhGuaixP8JFGBQt036IoFQsSItJvX5X7+jxzHn33pkPPt595/vOuXPuvfPejNJh+Ak+AptVAODbAuZZjXpPzj5h3ltEz4C1rgKl4rTyN9Iu5J3y5LwRclqJ/hQ86ypQDlKeD/VYyHnt8DcI/k9ET9rYWFSNSiFmCty34wTYACaZ54eK/lA1uKQFaSe0DbFYbELQuoXYVTI+aK/VqNGEGjlpYo4c0zeCX4k+qByA3qaj0S34zWpPM5+532r1CrM7ROuR5l2hPED3o7hcIaG7npROh9YqxNrAChbrxbzf7HiPWn4iWtBMnBfxNmKRJ+P+wgAFN1ET7tcp+VgVsB2etcS/Ui0dG4rLZFzHNNNEpihD+49WJThitfdMewVWkft27cde4u8Q9GE2x2bwP/M8D2nko53A8Bj4jGgnSV6jjR0gsTus1gA4yGI3iH9ImP+I8BkHBN82XyMu1JG86zZmdqsKjIFTzL8fPMdiY3rhC1wv1P8DJoRGpJfl+XIbecfyvhPtkJafVjXgDiGeBrNCPKsEIB4HfzHvKLiqnEbOCMeqgC9gL4vRh8Iw03p08SPXIEVyzAI0E34Q/I2uRt6Cuxhr2QpdE/Jm2H0n8V/0eA34m3xW+3HT1UhOeaAXHgg+JIi/KcDfRfxHdRjMrsbLagT6enDCM0E/yzFf7nGHfxKsVtFH0YX5BQh9IS4Cb9zfuFzw2G6znBlc+hz+e/CM2ybMCh8GWwReEnI7lE0saUcK0EsvSQlJwZ9x+NOBc64G/wr5qZJ3hKArIv4Cq/tZiJsdyQvxIfhfqgDAN4XLQ0HabX7GZ1lwRIUVfYKVOK6Kfwv1Rfj/wX8CQ/5P8YEqDeZYT7LYmjnTTfkTI7XGcAAAAABJRU5ErkJggg==",En="./assets/treasures-of-aztec_lady1 1.49282d7b.png",In="./assets/VIP 4 Get 39 700x300 1.ac773be1.png",Yn="./assets/vip1.b5ea8b83.png",Un="./assets/vip2.c935e5f6.png",Fn="./assets/vip3.c44af05a.png",jn="./assets/vip4.d3994c5c.png",Pn="./assets/vip5.965546e4.png",Xn="./assets/vip6.1ffa7269.png",Qn="./assets/welcome 1.6f608649.png",Tn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEmSURBVHgB3ZbRDYIwEEBP4wCMwAg4AWyAG8AobAJM0DCBbiAjsAHdoN4hkh5CIdL2w5dcbBrtK3f0LACilAox7hi9sougtclxGgdPjADcIDGuJBI4uIFbHiRS4B7pSwRn8IQ30WU+UVUVNE0DbdtOc1LKIZYIw3AaB0EwRJ7nkGUZ/6L+0pdlSfWyErhhdqCYKEkSayJaS4fVaC09v9B1HZ/QrZjf1R1iLYbU0ueeJ6K1VlNn+iEJ9FruER4WTR1TCGMWDov6vldFURglRtFWjfYKNkWmvNPiewVLqWavdxRFsIapOyyhdwyCidI0BVvMWxDrddSjiLqu2YH7Onwz9N1TVuI4ntb68J//R/Ya3IaoBfc03q5bw0i9L5BC2YUuo/fxQeAFMzuQLAC5dnUAAAAASUVORK5CYII=",Ln=`/* -------------------------------\r
global\r
------------------------------- */\r
/* ! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com */\r
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/\r
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}\r
::before,
::after {
  --tw-content: '';
}\r
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/\r
html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}\r
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/\r
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}\r
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/\r
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}\r
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/\r
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}\r
/*
Remove the default font size and weight for headings.
*/\r
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}\r
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/\r
a {
  color: inherit;
  text-decoration: inherit;
}\r
/*
Add the correct font weight in Edge and Safari.
*/\r
b,
strong {
  font-weight: bolder;
}\r
/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/\r
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}\r
/*
Add the correct font size in all browsers.
*/\r
small {
  font-size: 80%;
}\r
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/\r
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}\r
sub {
  bottom: -0.25em;
}\r
sup {
  top: -0.5em;
}\r
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/\r
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}\r
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/\r
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}\r
/*
Remove the inheritance of text transform in Edge and Firefox.
*/\r
button,
select {
  text-transform: none;
}\r
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/\r
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}\r
/*
Use the modern Firefox focus style for all focusable elements.
*/\r
:-moz-focusring {
  outline: auto;
}\r
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/\r
:-moz-ui-invalid {
  box-shadow: none;
}\r
/*
Add the correct vertical alignment in Chrome and Firefox.
*/\r
progress {
  vertical-align: baseline;
}\r
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/\r
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}\r
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/\r
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}\r
/*
Remove the inner padding in Chrome and Safari on macOS.
*/\r
::-webkit-search-decoration {
  -webkit-appearance: none;
}\r
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/\r
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}\r
/*
Add the correct display in Chrome and Safari.
*/\r
summary {
  display: list-item;
}\r
/*
Removes the default spacing and border for appropriate elements.
*/\r
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}\r
fieldset {
  margin: 0;
  padding: 0;
}\r
legend {
  padding: 0;
}\r
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}\r
/*
Prevent resizing textareas horizontally by default.
*/\r
textarea {
  resize: vertical;
}\r
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/\r
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}\r
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}\r
/*
Set the default cursor for buttons.
*/\r
button,
[role="button"] {
  cursor: pointer;
}\r
/*
Make sure disabled buttons don't get the pointer cursor.
*/\r
:disabled {
  cursor: default;
}\r
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/\r
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}\r
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/\r
img,
video {
  max-width: 100%;
  height: auto;
}\r
html {\r
        scroll-behavior: smooth;\r
    }\r
::-webkit-scrollbar {
  height: 0px;
  width: 0px;
}\r
body {\r
        font-family: 'Roboto';\r
    }\r
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}`,Vn=`.fixed {\r
        position: fixed;\r
}\r
\r
.absolute {\r
        position: absolute;\r
}\r
\r
.relative {\r
        position: relative;\r
}\r
\r
.bottom-0 {\r
        bottom: 0px;\r
}\r
\r
.right-\\[10\\%\\] {\r
        right: 10%;\r
}\r
\r
.top-0 {\r
        top: 0px;\r
}\r
\r
.right-\\[-100\\%\\] {\r
        right: -100%;\r
}\r
\r
.right-\\[5\\%\\] {\r
        right: 5%;\r
}\r
\r
.bottom-1\\/2 {\r
        bottom: 50%;\r
}\r
\r
.left-0 {\r
        left: 0px;\r
}\r
\r
.top-\\[-30px\\] {\r
        top: -30px;\r
}\r
\r
.top-\\[-10px\\] {\r
        top: -10px;\r
}\r
\r
.bottom-\\[3\\%\\] {\r
        bottom: 3%;\r
}\r
\r
.bottom-\\[5\\%\\] {\r
        bottom: 5%;\r
}\r
\r
.left-1\\/2 {\r
        left: 50%;\r
}\r
\r
.bottom-\\[80\\%\\] {\r
        bottom: 80%;\r
}\r
\r
.right-\\[50\\%\\] {\r
        right: 50%;\r
}\r
\r
.left-\\[-50\\%\\] {\r
        left: -50%;\r
}\r
\r
.top-\\[-4\\%\\] {\r
        top: -4%;\r
}\r
\r
.right-\\[-30\\%\\] {\r
        right: -30%;\r
}\r
\r
.left-\\[-20\\%\\] {\r
        left: -20%;\r
}\r
\r
.z-\\[2\\] {\r
        z-index: 2;\r
}\r
\r
.z-\\[-1\\] {\r
        z-index: -1;\r
}\r
\r
.mx-auto {\r
        margin-left: auto;\r
        margin-right: auto;\r
}\r
\r
.mr-5 {\r
        margin-right: 1.25rem;\r
}\r
\r
.mb-5 {\r
        margin-bottom: 1.25rem;\r
}\r
\r
.mt-10 {\r
        margin-top: 2.5rem;\r
}\r
\r
.mr-4 {\r
        margin-right: 1rem;\r
}\r
\r
.mb-12 {\r
        margin-bottom: 3rem;\r
}\r
\r
.mt-20 {\r
        margin-top: 5rem;\r
}\r
\r
.mt-3 {\r
        margin-top: 0.75rem;\r
}\r
\r
.mr-3 {\r
        margin-right: 0.75rem;\r
}\r
\r
.mb-20 {\r
        margin-bottom: 5rem;\r
}\r
\r
.mt-5 {\r
        margin-top: 1.25rem;\r
}\r
\r
.mb-10 {\r
        margin-bottom: 2.5rem;\r
}\r
\r
.block {\r
        display: block;\r
}\r
\r
.flex {\r
        display: flex;\r
}\r
\r
.hidden {\r
        display: none;\r
}\r
\r
.h-\\[26px\\] {\r
        height: 26px;\r
}\r
\r
.h-\\[11px\\] {\r
        height: 11px;\r
}\r
\r
.h-screen {\r
        height: 100vh;\r
}\r
\r
.h-\\[350px\\] {\r
        height: 350px;\r
}\r
\r
.h-\\[85px\\] {\r
        height: 85px;\r
}\r
\r
.h-full {\r
        height: 100%;\r
}\r
\r
.h-\\[289px\\] {\r
        height: 289px;\r
}\r
\r
.h-\\[116px\\] {\r
        height: 116px;\r
}\r
\r
.h-\\[35px\\] {\r
        height: 35px;\r
}\r
\r
.w-full {\r
        width: 100%;\r
}\r
\r
.w-\\[320px\\] {\r
        width: 320px;\r
}\r
\r
.w-\\[25px\\] {\r
        width: 25px;\r
}\r
\r
.w-\\[85\\%\\] {\r
        width: 85%;\r
}\r
\r
.w-screen {\r
        width: 100vw;\r
}\r
\r
.w-\\[300px\\] {\r
        width: 300px;\r
}\r
\r
.w-\\[116px\\] {\r
        width: 116px;\r
}\r
\r
.w-\\[330px\\] {\r
        width: 330px;\r
}\r
\r
.w-\\[310px\\] {\r
        width: 310px;\r
}\r
\r
.w-\\[50\\%\\] {\r
        width: 50%;\r
}\r
\r
.w-\\[125px\\] {\r
        width: 125px;\r
}\r
\r
.w-\\[167px\\] {\r
        width: 167px;\r
}\r
\r
.w-\\[600px\\] {\r
        width: 600px;\r
}\r
\r
.w-\\[100px\\] {\r
        width: 100px;\r
}\r
\r
.w-\\[500px\\] {\r
        width: 500px;\r
}\r
\r
.w-\\[20px\\] {\r
        width: 20px;\r
}\r
\r
.max-w-\\[265px\\] {\r
        max-width: 265px;\r
}\r
\r
.max-w-\\[136px\\] {\r
        max-width: 136px;\r
}\r
\r
.max-w-\\[960px\\] {\r
        max-width: 960px;\r
}\r
\r
.translate-x-\\[-50\\%\\] {\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
\r
.translate-y-\\[10\\%\\] {\r
        --tw-translate-y: 10%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
\r
.translate-x-\\[50\\%\\] {\r
        --tw-translate-x: 50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
\r
.cursor-pointer {\r
        cursor: pointer;\r
}\r
\r
.flex-col {\r
        flex-direction: column;\r
}\r
\r
.flex-wrap {\r
        flex-wrap: wrap;\r
}\r
\r
.items-start {\r
        align-items: flex-start;\r
}\r
\r
.items-center {\r
        align-items: center;\r
}\r
\r
.justify-start {\r
        justify-content: flex-start;\r
}\r
\r
.justify-end {\r
        justify-content: flex-end;\r
}\r
\r
.justify-center {\r
        justify-content: center;\r
}\r
\r
.justify-between {\r
        justify-content: space-between;\r
}\r
\r
.justify-around {\r
        justify-content: space-around;\r
}\r
\r
.overflow-hidden {\r
        overflow: hidden;\r
}\r
\r
.rounded-md {\r
        border-radius: 0.375rem;\r
}\r
\r
.rounded-full {\r
        border-radius: 9999px;\r
}\r
\r
.rounded-\\[5px\\] {\r
        border-radius: 5px;\r
}\r
\r
.rounded-tl-\\[40px\\] {\r
        border-top-left-radius: 40px;\r
}\r
\r
.rounded-tr-\\[40px\\] {\r
        border-top-right-radius: 40px;\r
}\r
\r
.border-y-2 {\r
        border-top-width: 2px;\r
        border-bottom-width: 2px;\r
}\r
\r
.bg-black {\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));\r
}\r
\r
.bg-\\[\\#000000cc\\] {\r
        background-color: #000000cc;\r
}\r
\r
.bg-transparent {\r
        background-color: transparent;\r
}\r
\r
.bg-gradient-to-t {\r
        background-image: linear-gradient(to top, var(--tw-gradient-stops));\r
}\r
\r
.from-black {\r
        --tw-gradient-from: #000;\r
        --tw-gradient-to: rgb(0 0 0 / 0);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
}\r
\r
.to-\\[\\#072C41\\] {\r
        --tw-gradient-to: #072C41;\r
}\r
\r
.p-10 {\r
        padding: 2.5rem;\r
}\r
\r
.py-5 {\r
        padding-top: 1.25rem;\r
        padding-bottom: 1.25rem;\r
}\r
\r
.py-10 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem;\r
}\r
\r
.py-20 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem;\r
}\r
\r
.px-10 {\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem;\r
}\r
\r
.py-40 {\r
        padding-top: 10rem;\r
        padding-bottom: 10rem;\r
}\r
\r
.py-6 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem;\r
}\r
\r
.pb-20 {\r
        padding-bottom: 5rem;\r
}\r
\r
.pb-3 {\r
        padding-bottom: 0.75rem;\r
}\r
\r
.pb-10 {\r
        padding-bottom: 2.5rem;\r
}\r
\r
.pb-5 {\r
        padding-bottom: 1.25rem;\r
}\r
\r
.text-left {\r
        text-align: left;\r
}\r
\r
.text-center {\r
        text-align: center;\r
}\r
\r
.text-\\[24px\\] {\r
        font-size: 24px;\r
}\r
\r
.text-\\[18px\\] {\r
        font-size: 18px;\r
}\r
\r
.text-\\[60px\\] {\r
        font-size: 60px;\r
}\r
\r
.text-\\[35px\\] {\r
        font-size: 35px;\r
}\r
\r
.font-\\[700\\] {\r
        font-weight: 700;\r
}\r
\r
.font-\\[900\\] {\r
        font-weight: 900;\r
}\r
\r
.font-light {\r
        font-weight: 300;\r
}\r
\r
.leading-\\[14\\.06px\\] {\r
        line-height: 14.06px;\r
}\r
\r
.text-white {\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
\r
.text-yellow-500 {\r
        --tw-text-opacity: 1;\r
        color: rgb(234 179 8 / var(--tw-text-opacity));\r
}\r
\r
.text-primary {\r
        --tw-text-opacity: 1;\r
        color: rgb(70 189 253 / var(--tw-text-opacity));\r
}\r
\r
.opacity-70 {\r
        opacity: 0.7;\r
}\r
\r
.drop-shadow-title {\r
        --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
}\r
\r
.transition {\r
        transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
}\r
        /* font */\r
\r
        .title-secondary {\r
        font-size: 40px;\r
        font-weight: 700;\r
}\r
\r
        .title-tertiary {\r
        font-size: 30px;\r
        font-weight: 700;\r
}\r
\r
        .title-small {\r
        font-size: 18px;\r
        font-weight: 700;\r
}\r
\r
        .description {\r
        font-size: 12px;\r
        font-weight: 400;\r
}\r
    /* -------------------------------\r
    components\r
    ------------------------------- */\r
    /* Btn */\r
    \r
    .primary-btn {\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(100 196 249 / var(--tw-bg-opacity));\r
        height: 48px;\r
        width: 136px;\r
        border-radius: 3px;\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
    \r
    .secondary-btn {\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(10 78 116 / var(--tw-bg-opacity));\r
        height: 48px;\r
        width: 136px;\r
        border-radius: 3px;\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
    /* gradient */\r
    .bg-gradient-1 {\r
        background: linear-gradient(180deg, #062746b3 0%, #46bcff80 100%);\r
    }\r
    \r
    .bg-gradient-2 {\r
        background: linear-gradient(360deg, #040e28e6 0%, #3287b9e6 97.92%, #65c6ffe6 100%);\r
    }\r
    \r
    /* indecate */\r
    .indecate {\r
        margin-bottom: 0.75rem;\r
        height: 10px;\r
        width: 10px;\r
        cursor: pointer;\r
        border-radius: 9999px;\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
    \r
    .indecate.active {\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(70 189 255 / var(--tw-bg-opacity));\r
}\r
    \r
    /* divider */\r
    \r
    .divider-line-to-right {\r
        background: linear-gradient(90deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
    \r
    .divider-line-to-left {\r
        background: linear-gradient(270deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
    \r
    .divider-line-blue {\r
        height: 1px;\r
        width: 100%;\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(70 189 255 / var(--tw-bg-opacity));\r
}\r
/* -------------------------------\r
design system\r
------------------------------- */\r
.before\\:absolute::before {\r
        content: var(--tw-content);\r
        position: absolute;\r
}\r
.before\\:h-\\[3px\\]::before {\r
        content: var(--tw-content);\r
        height: 3px;\r
}\r
.before\\:w-\\[32px\\]::before {\r
        content: var(--tw-content);\r
        width: 32px;\r
}\r
.before\\:rotate-45::before {\r
        content: var(--tw-content);\r
        --tw-rotate: 45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.before\\:rounded-lg::before {\r
        content: var(--tw-content);\r
        border-radius: 0.5rem;\r
}\r
.before\\:bg-white::before {\r
        content: var(--tw-content);\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
.after\\:absolute::after {\r
        content: var(--tw-content);\r
        position: absolute;\r
}\r
.after\\:h-\\[3px\\]::after {\r
        content: var(--tw-content);\r
        height: 3px;\r
}\r
.after\\:w-\\[32px\\]::after {\r
        content: var(--tw-content);\r
        width: 32px;\r
}\r
.after\\:rotate-\\[-45deg\\]::after {\r
        content: var(--tw-content);\r
        --tw-rotate: -45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.after\\:rounded-lg::after {\r
        content: var(--tw-content);\r
        border-radius: 0.5rem;\r
}\r
.after\\:bg-white::after {\r
        content: var(--tw-content);\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
@media (min-width: 320px) {\r
\r
        .\\32xs\\:w-\\[200px\\] {\r
                width: 200px;\r
        }\r
}\r
@media (min-width: 414px) {\r
\r
        .xs\\:right-\\[5\\%\\] {\r
                right: 5%;\r
        }\r
}\r
@media (min-width: 640px) {\r
\r
        .sm\\:static {\r
                position: static;\r
        }\r
\r
        .sm\\:bottom-\\[70\\%\\] {\r
                bottom: 70%;\r
        }\r
\r
        .sm\\:top-\\[25\\%\\] {\r
                top: 25%;\r
        }\r
\r
        .sm\\:right-0 {\r
                right: 0px;\r
        }\r
\r
        .sm\\:mb-0 {\r
                margin-bottom: 0px;\r
        }\r
\r
        .sm\\:mt-0 {\r
                margin-top: 0px;\r
        }\r
\r
        .sm\\:ml-auto {\r
                margin-left: auto;\r
        }\r
\r
        .sm\\:mb-3 {\r
                margin-bottom: 0.75rem;\r
        }\r
\r
        .sm\\:ml-\\[-5\\%\\] {\r
                margin-left: -5%;\r
        }\r
\r
        .sm\\:mr-2 {\r
                margin-right: 0.5rem;\r
        }\r
\r
        .sm\\:mr-5 {\r
                margin-right: 1.25rem;\r
        }\r
\r
        .sm\\:mr-0 {\r
                margin-right: 0px;\r
        }\r
\r
        .sm\\:block {\r
                display: block;\r
        }\r
\r
        .sm\\:inline {\r
                display: inline;\r
        }\r
\r
        .sm\\:flex {\r
                display: flex;\r
        }\r
\r
        .sm\\:hidden {\r
                display: none;\r
        }\r
\r
        .sm\\:h-\\[420px\\] {\r
                height: 420px;\r
        }\r
\r
        .sm\\:h-\\[143px\\] {\r
                height: 143px;\r
        }\r
\r
        .sm\\:w-\\[640px\\] {\r
                width: 640px;\r
        }\r
\r
        .sm\\:w-auto {\r
                width: auto;\r
        }\r
\r
        .sm\\:w-\\[350px\\] {\r
                width: 350px;\r
        }\r
\r
        .sm\\:w-\\[600px\\] {\r
                width: 600px;\r
        }\r
\r
        .sm\\:w-full {\r
                width: 100%;\r
        }\r
\r
        .sm\\:w-1\\/2 {\r
                width: 50%;\r
        }\r
\r
        .sm\\:w-\\[58\\%\\] {\r
                width: 58%;\r
        }\r
\r
        .sm\\:max-w-\\[360px\\] {\r
                max-width: 360px;\r
        }\r
\r
        .sm\\:max-w-\\[355px\\] {\r
                max-width: 355px;\r
        }\r
\r
        .sm\\:translate-y-\\[-10\\%\\] {\r
                --tw-translate-y: -10%;\r
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
        }\r
\r
        .sm\\:flex-row {\r
                flex-direction: row;\r
        }\r
\r
        .sm\\:p-20 {\r
                padding: 5rem;\r
        }\r
\r
        .sm\\:pb-0 {\r
                padding-bottom: 0px;\r
        }\r
\r
        .sm\\:pt-14 {\r
                padding-top: 3.5rem;\r
        }\r
\r
        .sm\\:text-left {\r
                text-align: left;\r
        }\r
        .sm\\:title-primary {\r
                font-size: 40px;\r
                font-weight: 700;\r
        }\r
\r
        .sm\\:title-secondary {\r
                font-size: 40px;\r
                font-weight: 700;\r
        }\r
}\r
@media (min-width: 768px) {\r
\r
        .md\\:right-\\[8\\%\\] {\r
                right: 8%;\r
        }\r
\r
        .md\\:bottom-\\[10\\%\\] {\r
                bottom: 10%;\r
        }\r
\r
        .md\\:mt-0 {\r
                margin-top: 0px;\r
        }\r
\r
        .md\\:mb-0 {\r
                margin-bottom: 0px;\r
        }\r
\r
        .md\\:mb-10 {\r
                margin-bottom: 2.5rem;\r
        }\r
\r
        .md\\:block {\r
                display: block;\r
        }\r
\r
        .md\\:hidden {\r
                display: none;\r
        }\r
\r
        .md\\:h-\\[143px\\] {\r
                height: 143px;\r
        }\r
\r
        .md\\:w-\\[430px\\] {\r
                width: 430px;\r
        }\r
\r
        .md\\:w-auto {\r
                width: auto;\r
        }\r
\r
        .md\\:w-\\[330px\\] {\r
                width: 330px;\r
        }\r
\r
        .md\\:p-5 {\r
                padding: 1.25rem;\r
        }\r
\r
        .md\\:px-11 {\r
                padding-left: 2.75rem;\r
                padding-right: 2.75rem;\r
        }\r
\r
        .md\\:pr-24 {\r
                padding-right: 6rem;\r
        }\r
}\r
@media (min-width: 1024px) {\r
\r
        .lg\\:right-0 {\r
                right: 0px;\r
        }\r
\r
        .lg\\:mt-36 {\r
                margin-top: 9rem;\r
        }\r
\r
        .lg\\:h-screen {\r
                height: 100vh;\r
        }\r
\r
        .lg\\:w-\\[950px\\] {\r
                width: 950px;\r
        }\r
\r
        .lg\\:w-auto {\r
                width: auto;\r
        }\r
\r
        .lg\\:w-\\[442px\\] {\r
                width: 442px;\r
        }\r
\r
        .lg\\:flex-nowrap {\r
                flex-wrap: nowrap;\r
        }\r
\r
        .lg\\:px-20 {\r
                padding-left: 5rem;\r
                padding-right: 5rem;\r
        }\r
\r
        .lg\\:px-10 {\r
                padding-left: 2.5rem;\r
                padding-right: 2.5rem;\r
        }\r
\r
        .lg\\:pb-6 {\r
                padding-bottom: 1.5rem;\r
        }\r
\r
        .lg\\:pr-32 {\r
                padding-right: 8rem;\r
        }\r
}`,Nn=`/*
! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}\r
    /* -------------------------------\r
    layout\r
    ------------------------------- */\r
    .page-container {
  height: 100vh;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  text-align: center;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}`,On=`/* -------------------------------\r
global\r
------------------------------- */\r
@tailwind base;\r
@tailwind utilities;\r
/* ! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com */\r
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/\r
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}\r
::before,
::after {
  --tw-content: '';
}\r
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/\r
html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}\r
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/\r
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}\r
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/\r
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}\r
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/\r
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}\r
/*
Remove the default font size and weight for headings.
*/\r
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}\r
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/\r
a {
  color: inherit;
  text-decoration: inherit;
}\r
/*
Add the correct font weight in Edge and Safari.
*/\r
b,
strong {
  font-weight: bolder;
}\r
/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/\r
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}\r
/*
Add the correct font size in all browsers.
*/\r
small {
  font-size: 80%;
}\r
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/\r
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}\r
sub {
  bottom: -0.25em;
}\r
sup {
  top: -0.5em;
}\r
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/\r
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}\r
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/\r
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}\r
/*
Remove the inheritance of text transform in Edge and Firefox.
*/\r
button,
select {
  text-transform: none;
}\r
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/\r
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}\r
/*
Use the modern Firefox focus style for all focusable elements.
*/\r
:-moz-focusring {
  outline: auto;
}\r
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/\r
:-moz-ui-invalid {
  box-shadow: none;
}\r
/*
Add the correct vertical alignment in Chrome and Firefox.
*/\r
progress {
  vertical-align: baseline;
}\r
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/\r
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}\r
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/\r
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}\r
/*
Remove the inner padding in Chrome and Safari on macOS.
*/\r
::-webkit-search-decoration {
  -webkit-appearance: none;
}\r
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/\r
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}\r
/*
Add the correct display in Chrome and Safari.
*/\r
summary {
  display: list-item;
}\r
/*
Removes the default spacing and border for appropriate elements.
*/\r
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}\r
fieldset {
  margin: 0;
  padding: 0;
}\r
legend {
  padding: 0;
}\r
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}\r
/*
Prevent resizing textareas horizontally by default.
*/\r
textarea {
  resize: vertical;
}\r
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/\r
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}\r
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}\r
/*
Set the default cursor for buttons.
*/\r
button,
[role="button"] {
  cursor: pointer;
}\r
/*
Make sure disabled buttons don't get the pointer cursor.
*/\r
:disabled {
  cursor: default;
}\r
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/\r
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}\r
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/\r
img,
video {
  max-width: 100%;
  height: auto;
}\r
html {\r
        scroll-behavior: smooth;\r
    }\r
::-webkit-scrollbar{
  height: 0px;
  width: 0px;
}\r
body {\r
        font-family: 'Roboto';\r
    }\r
/* -------------------------------\r
    layout\r
    ------------------------------- */\r
.page-container{
  height: 100vh;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  text-align: center;
}\r
*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
::-webkit-backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.fixed{
  position: fixed;
}\r
.absolute{
  position: absolute;
}\r
.relative{
  position: relative;
}\r
.bottom-0{
  bottom: 0px;
}\r
.right-\\[10\\%\\]{
  right: 10%;
}\r
.top-0{
  top: 0px;
}\r
.right-\\[-100\\%\\]{
  right: -100%;
}\r
.right-\\[5\\%\\]{
  right: 5%;
}\r
.bottom-1\\/2{
  bottom: 50%;
}\r
.left-0{
  left: 0px;
}\r
.top-\\[-30px\\]{
  top: -30px;
}\r
.top-\\[-10px\\]{
  top: -10px;
}\r
.bottom-\\[3\\%\\]{
  bottom: 3%;
}\r
.bottom-\\[5\\%\\]{
  bottom: 5%;
}\r
.left-1\\/2{
  left: 50%;
}\r
.bottom-\\[80\\%\\]{
  bottom: 80%;
}\r
.right-\\[50\\%\\]{
  right: 50%;
}\r
.left-\\[-50\\%\\]{
  left: -50%;
}\r
.top-\\[-4\\%\\]{
  top: -4%;
}\r
.right-\\[-30\\%\\]{
  right: -30%;
}\r
.left-\\[-20\\%\\]{
  left: -20%;
}\r
.z-\\[2\\]{
  z-index: 2;
}\r
.z-\\[-1\\]{
  z-index: -1;
}\r
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}\r
.mr-5{
  margin-right: 1.25rem;
}\r
.mb-5{
  margin-bottom: 1.25rem;
}\r
.mt-10{
  margin-top: 2.5rem;
}\r
.mr-4{
  margin-right: 1rem;
}\r
.mb-12{
  margin-bottom: 3rem;
}\r
.mt-20{
  margin-top: 5rem;
}\r
.mt-3{
  margin-top: 0.75rem;
}\r
.mr-3{
  margin-right: 0.75rem;
}\r
.mb-20{
  margin-bottom: 5rem;
}\r
.mt-5{
  margin-top: 1.25rem;
}\r
.mb-10{
  margin-bottom: 2.5rem;
}\r
.block{
  display: block;
}\r
.flex{
  display: flex;
}\r
.hidden{
  display: none;
}\r
.h-\\[26px\\]{
  height: 26px;
}\r
.h-\\[11px\\]{
  height: 11px;
}\r
.h-screen{
  height: 100vh;
}\r
.h-\\[350px\\]{
  height: 350px;
}\r
.h-\\[85px\\]{
  height: 85px;
}\r
.h-full{
  height: 100%;
}\r
.h-\\[289px\\]{
  height: 289px;
}\r
.h-\\[116px\\]{
  height: 116px;
}\r
.h-\\[35px\\]{
  height: 35px;
}\r
.w-full{
  width: 100%;
}\r
.w-\\[320px\\]{
  width: 320px;
}\r
.w-\\[25px\\]{
  width: 25px;
}\r
.w-\\[85\\%\\]{
  width: 85%;
}\r
.w-screen{
  width: 100vw;
}\r
.w-\\[300px\\]{
  width: 300px;
}\r
.w-\\[116px\\]{
  width: 116px;
}\r
.w-\\[330px\\]{
  width: 330px;
}\r
.w-\\[310px\\]{
  width: 310px;
}\r
.w-\\[50\\%\\]{
  width: 50%;
}\r
.w-\\[125px\\]{
  width: 125px;
}\r
.w-\\[167px\\]{
  width: 167px;
}\r
.w-\\[600px\\]{
  width: 600px;
}\r
.w-\\[100px\\]{
  width: 100px;
}\r
.w-\\[500px\\]{
  width: 500px;
}\r
.w-\\[20px\\]{
  width: 20px;
}\r
.max-w-\\[265px\\]{
  max-width: 265px;
}\r
.max-w-\\[136px\\]{
  max-width: 136px;
}\r
.max-w-\\[960px\\]{
  max-width: 960px;
}\r
.translate-x-\\[-50\\%\\]{
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.translate-y-\\[10\\%\\]{
  --tw-translate-y: 10%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.translate-x-\\[50\\%\\]{
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.cursor-pointer{
  cursor: pointer;
}\r
.flex-col{
  flex-direction: column;
}\r
.flex-wrap{
  flex-wrap: wrap;
}\r
.items-start{
  align-items: flex-start;
}\r
.items-center{
  align-items: center;
}\r
.justify-start{
  justify-content: flex-start;
}\r
.justify-end{
  justify-content: flex-end;
}\r
.justify-center{
  justify-content: center;
}\r
.justify-between{
  justify-content: space-between;
}\r
.justify-around{
  justify-content: space-around;
}\r
.overflow-hidden{
  overflow: hidden;
}\r
.rounded-md{
  border-radius: 0.375rem;
}\r
.rounded-full{
  border-radius: 9999px;
}\r
.rounded-\\[5px\\]{
  border-radius: 5px;
}\r
.rounded-tl-\\[40px\\]{
  border-top-left-radius: 40px;
}\r
.rounded-tr-\\[40px\\]{
  border-top-right-radius: 40px;
}\r
.border-y-2{
  border-top-width: 2px;
  border-bottom-width: 2px;
}\r
.bg-black{
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}\r
.bg-\\[\\#000000cc\\]{
  background-color: #000000cc;
}\r
.bg-transparent{
  background-color: transparent;
}\r
.bg-gradient-to-t{
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}\r
.from-black{
  --tw-gradient-from: #000;
  --tw-gradient-to: rgb(0 0 0 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.to-\\[\\#072C41\\]{
  --tw-gradient-to: #072C41;
}\r
.p-10{
  padding: 2.5rem;
}\r
.py-5{
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.py-10{
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}\r
.py-20{
  padding-top: 5rem;
  padding-bottom: 5rem;
}\r
.px-10{
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}\r
.py-40{
  padding-top: 10rem;
  padding-bottom: 10rem;
}\r
.py-6{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.pb-20{
  padding-bottom: 5rem;
}\r
.pb-3{
  padding-bottom: 0.75rem;
}\r
.pb-10{
  padding-bottom: 2.5rem;
}\r
.pb-5{
  padding-bottom: 1.25rem;
}\r
.text-left{
  text-align: left;
}\r
.text-center{
  text-align: center;
}\r
.text-\\[24px\\]{
  font-size: 24px;
}\r
.text-\\[18px\\]{
  font-size: 18px;
}\r
.text-\\[60px\\]{
  font-size: 60px;
}\r
.text-\\[35px\\]{
  font-size: 35px;
}\r
.font-\\[700\\]{
  font-weight: 700;
}\r
.font-\\[900\\]{
  font-weight: 900;
}\r
.font-light{
  font-weight: 300;
}\r
.leading-\\[14\\.06px\\]{
  line-height: 14.06px;
}\r
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-yellow-500{
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}\r
.text-primary{
  --tw-text-opacity: 1;
  color: rgb(70 189 253 / var(--tw-text-opacity));
}\r
.opacity-70{
  opacity: 0.7;
}\r
.drop-shadow-title{
  --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition{
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
/* util */\r
.wh-full{
  height: 100%;
  width: 100%;
}\r
.flex-xy-center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}\r
.absolute-x-center{
  left: 50%;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
/* font */\r
.title-secondary{
  font-size: 40px;
  font-weight: 700;
}\r
.title-tertiary{
  font-size: 30px;
  font-weight: 700;
}\r
.title-small{
  font-size: 18px;
  font-weight: 700;
}\r
.description{
  font-size: 12px;
  font-weight: 400;
}\r
/* -------------------------------\r
    components\r
    ------------------------------- */\r
/* Btn */\r
.primary-btn{
  --tw-bg-opacity: 1;
  background-color: rgb(100 196 249 / var(--tw-bg-opacity));
  height: 48px;
  width: 136px;
  border-radius: 3px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.secondary-btn{
  --tw-bg-opacity: 1;
  background-color: rgb(10 78 116 / var(--tw-bg-opacity));
  height: 48px;
  width: 136px;
  border-radius: 3px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
/* gradient */\r
.bg-gradient-1 {\r
        background: linear-gradient(180deg, #062746b3 0%, #46bcff80 100%);\r
    }\r
.bg-gradient-2 {\r
        background: linear-gradient(360deg, #040e28e6 0%, #3287b9e6 97.92%, #65c6ffe6 100%);\r
    }\r
/* indecate */\r
.indecate{
  margin-bottom: 0.75rem;
  height: 10px;
  width: 10px;
  cursor: pointer;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.indecate.active{
  --tw-bg-opacity: 1;
  background-color: rgb(70 189 255 / var(--tw-bg-opacity));
}\r
/* divider */\r
.divider-line-to-right {\r
        background: linear-gradient(90deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
.divider-line-to-left {\r
        background: linear-gradient(270deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
.divider-line-blue{
  height: 1px;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(70 189 255 / var(--tw-bg-opacity));
}\r
/* -------------------------------\r
design system\r
------------------------------- */\r
@tailwind components;\r
/* TheHeader */\r
.the-header{
  z-index: 2;
  display: none;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
@media (min-width: 768px){\r
  .the-header{
    display: block;
  }
}\r
.the-header-ul{
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: space-around;
}\r
/* -------------------------------\r
    tansition\u3001animate\r
    ------------------------------- */\r
/* mobile header panel animate */\r
.home-scetion1-wrap{
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}\r
@media (min-width: 768px){\r
  .home-scetion1-wrap{
    min-height: 900px;
  }
}\r
@media (min-width: 1024px){\r
  .home-scetion1-wrap{
    height: 100vh;
  }
}\r
.home-section1-container{
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}\r
@media (min-width: 1024px){\r
  .home-section1-container{
    margin-top: 6rem;
  }
}\r
.home-section1-title{
  width: 300px;
  text-align: center;
  --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  font-size: 30px;
  font-weight: 700;
}\r
@media (min-width: 640px){\r
  .home-section1-title{
    width: auto;
    font-size: 40px;
    font-weight: 700;
  }
}\r
@media (min-width: 768px){\r
  .home-section1-title{
    margin-top: 10rem;
  }
}\r
@media (min-width: 1024px){\r
  .home-section1-title{
    margin-top: 0px;
  }
}\r
.pc-bg{
  display: none;
}\r
@media (min-width: 640px){\r
  .pc-bg{
    display: block;
  }\r
  .mobile-bg{
    display: none;
  }
}\r
.home-ox{
  position: absolute;
  bottom: 0px;
  display: none;
  max-width: 475px;
}\r
@media (min-width: 640px){\r
  .home-ox{
    display: block;
  }
}\r
.home-lady{
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: none;
  max-width: 475px;
}\r
@media (min-width: 640px){\r
  .home-lady{
    display: block;
  }
}\r
.home-section1-arror-wrap{
  position: relative;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
}\r
.home-section1-arror{
  position: absolute;
  left: 50%;
  --tw-translate-x: -50%;
  top: 50%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
/* \u5171\u7528 */\r
.home-section1-bg{
  position: absolute;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
}\r
.before\\:absolute::before{
  content: var(--tw-content);
  position: absolute;
}\r
.before\\:h-\\[3px\\]::before{
  content: var(--tw-content);
  height: 3px;
}\r
.before\\:w-\\[32px\\]::before{
  content: var(--tw-content);
  width: 32px;
}\r
.before\\:rotate-45::before{
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.before\\:rounded-lg::before{
  content: var(--tw-content);
  border-radius: 0.5rem;
}\r
.before\\:bg-white::before{
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:absolute::after{
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:h-\\[3px\\]::after{
  content: var(--tw-content);
  height: 3px;
}\r
.after\\:w-\\[32px\\]::after{
  content: var(--tw-content);
  width: 32px;
}\r
.after\\:rotate-\\[-45deg\\]::after{
  content: var(--tw-content);
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.after\\:rounded-lg::after{
  content: var(--tw-content);
  border-radius: 0.5rem;
}\r
.after\\:bg-white::after{
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
@media (min-width: 320px){\r
  .\\32xs\\:w-\\[200px\\]{
    width: 200px;
  }
}\r
@media (min-width: 414px){\r
  .xs\\:right-\\[5\\%\\]{
    right: 5%;
  }
}\r
@media (min-width: 640px){\r
  .sm\\:static{
    position: static;
  }\r
  .sm\\:bottom-\\[70\\%\\]{
    bottom: 70%;
  }\r
  .sm\\:top-\\[25\\%\\]{
    top: 25%;
  }\r
  .sm\\:right-0{
    right: 0px;
  }\r
  .sm\\:mb-0{
    margin-bottom: 0px;
  }\r
  .sm\\:mt-0{
    margin-top: 0px;
  }\r
  .sm\\:ml-auto{
    margin-left: auto;
  }\r
  .sm\\:mb-3{
    margin-bottom: 0.75rem;
  }\r
  .sm\\:ml-\\[-5\\%\\]{
    margin-left: -5%;
  }\r
  .sm\\:mr-2{
    margin-right: 0.5rem;
  }\r
  .sm\\:mr-5{
    margin-right: 1.25rem;
  }\r
  .sm\\:mr-0{
    margin-right: 0px;
  }\r
  .sm\\:block{
    display: block;
  }\r
  .sm\\:inline{
    display: inline;
  }\r
  .sm\\:flex{
    display: flex;
  }\r
  .sm\\:hidden{
    display: none;
  }\r
  .sm\\:h-\\[420px\\]{
    height: 420px;
  }\r
  .sm\\:h-\\[143px\\]{
    height: 143px;
  }\r
  .sm\\:w-\\[640px\\]{
    width: 640px;
  }\r
  .sm\\:w-auto{
    width: auto;
  }\r
  .sm\\:w-\\[350px\\]{
    width: 350px;
  }\r
  .sm\\:w-\\[600px\\]{
    width: 600px;
  }\r
  .sm\\:w-full{
    width: 100%;
  }\r
  .sm\\:w-1\\/2{
    width: 50%;
  }\r
  .sm\\:w-\\[58\\%\\]{
    width: 58%;
  }\r
  .sm\\:max-w-\\[360px\\]{
    max-width: 360px;
  }\r
  .sm\\:max-w-\\[355px\\]{
    max-width: 355px;
  }\r
  .sm\\:translate-y-\\[-10\\%\\]{
    --tw-translate-y: -10%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }\r
  .sm\\:flex-row{
    flex-direction: row;
  }\r
  .sm\\:p-20{
    padding: 5rem;
  }\r
  .sm\\:pb-0{
    padding-bottom: 0px;
  }\r
  .sm\\:pt-14{
    padding-top: 3.5rem;
  }\r
  .sm\\:text-left{
    text-align: left;
  }\r
        .sm\\:title-primary{
    font-size: 40px;
    font-weight: 700;
  }\r
\r
        .sm\\:title-secondary{
    font-size: 40px;
    font-weight: 700;
  }
}\r
@media (min-width: 768px){\r
  .md\\:right-\\[8\\%\\]{
    right: 8%;
  }\r
  .md\\:bottom-\\[10\\%\\]{
    bottom: 10%;
  }\r
  .md\\:mt-0{
    margin-top: 0px;
  }\r
  .md\\:mb-0{
    margin-bottom: 0px;
  }\r
  .md\\:mb-10{
    margin-bottom: 2.5rem;
  }\r
  .md\\:block{
    display: block;
  }\r
  .md\\:hidden{
    display: none;
  }\r
  .md\\:h-\\[143px\\]{
    height: 143px;
  }\r
  .md\\:w-\\[430px\\]{
    width: 430px;
  }\r
  .md\\:w-auto{
    width: auto;
  }\r
  .md\\:w-\\[330px\\]{
    width: 330px;
  }\r
  .md\\:p-5{
    padding: 1.25rem;
  }\r
  .md\\:px-11{
    padding-left: 2.75rem;
    padding-right: 2.75rem;
  }\r
  .md\\:pr-24{
    padding-right: 6rem;
  }
}\r
@media (min-width: 1024px){\r
  .lg\\:right-0{
    right: 0px;
  }\r
  .lg\\:mt-36{
    margin-top: 9rem;
  }\r
  .lg\\:h-screen{
    height: 100vh;
  }\r
  .lg\\:w-\\[950px\\]{
    width: 950px;
  }\r
  .lg\\:w-auto{
    width: auto;
  }\r
  .lg\\:w-\\[442px\\]{
    width: 442px;
  }\r
  .lg\\:flex-nowrap{
    flex-wrap: nowrap;
  }\r
  .lg\\:px-20{
    padding-left: 5rem;
    padding-right: 5rem;
  }\r
  .lg\\:px-10{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }\r
  .lg\\:pb-6{
    padding-bottom: 1.5rem;
  }\r
  .lg\\:pr-32{
    padding-right: 8rem;
  }
}`,Mn=`.fixed {\r
    position: fixed
}\r
.absolute {\r
    position: absolute
}\r
.relative {\r
    position: relative
}\r
.bottom-0 {\r
    bottom: 0px
}\r
.right-\\[10\\%\\] {\r
    right: 10%
}\r
.top-0 {\r
    top: 0px
}\r
.right-\\[-100\\%\\] {\r
    right: -100%
}\r
.right-\\[5\\%\\] {\r
    right: 5%
}\r
.bottom-1\\/2 {\r
    bottom: 50%
}\r
.left-0 {\r
    left: 0px
}\r
.top-\\[-30px\\] {\r
    top: -30px
}\r
.top-\\[-10px\\] {\r
    top: -10px
}\r
.bottom-\\[3\\%\\] {\r
    bottom: 3%
}\r
.bottom-\\[5\\%\\] {\r
    bottom: 5%
}\r
.left-1\\/2 {\r
    left: 50%
}\r
.bottom-\\[80\\%\\] {\r
    bottom: 80%
}\r
.right-\\[50\\%\\] {\r
    right: 50%
}\r
.left-\\[-50\\%\\] {\r
    left: -50%
}\r
.top-\\[-4\\%\\] {\r
    top: -4%
}\r
.right-\\[-30\\%\\] {\r
    right: -30%
}\r
.left-\\[-20\\%\\] {\r
    left: -20%
}\r
.z-\\[2\\] {\r
    z-index: 2
}\r
.z-\\[-1\\] {\r
    z-index: -1
}\r
.mx-auto {\r
    margin-left: auto;\r
    margin-right: auto
}\r
.mr-5 {\r
    margin-right: 1.25rem
}\r
.mb-5 {\r
    margin-bottom: 1.25rem
}\r
.mt-10 {\r
    margin-top: 2.5rem
}\r
.mr-4 {\r
    margin-right: 1rem
}\r
.mb-12 {\r
    margin-bottom: 3rem
}\r
.mt-20 {\r
    margin-top: 5rem
}\r
.mt-3 {\r
    margin-top: 0.75rem
}\r
.mr-3 {\r
    margin-right: 0.75rem
}\r
.mb-20 {\r
    margin-bottom: 5rem
}\r
.mt-5 {\r
    margin-top: 1.25rem
}\r
.mb-10 {\r
    margin-bottom: 2.5rem
}\r
.block {\r
    display: block
}\r
.flex {\r
    display: flex
}\r
.hidden {\r
    display: none
}\r
.h-\\[26px\\] {\r
    height: 26px
}\r
.h-\\[11px\\] {\r
    height: 11px
}\r
.h-screen {\r
    height: 100vh
}\r
.h-\\[350px\\] {\r
    height: 350px
}\r
.h-\\[85px\\] {\r
    height: 85px
}\r
.h-full {\r
    height: 100%
}\r
.h-\\[289px\\] {\r
    height: 289px
}\r
.h-\\[116px\\] {\r
    height: 116px
}\r
.h-\\[35px\\] {\r
    height: 35px
}\r
.w-full {\r
    width: 100%
}\r
.w-\\[320px\\] {\r
    width: 320px
}\r
.w-\\[25px\\] {\r
    width: 25px
}\r
.w-\\[85\\%\\] {\r
    width: 85%
}\r
.w-screen {\r
    width: 100vw
}\r
.w-\\[300px\\] {\r
    width: 300px
}\r
.w-\\[116px\\] {\r
    width: 116px
}\r
.w-\\[330px\\] {\r
    width: 330px
}\r
.w-\\[310px\\] {\r
    width: 310px
}\r
.w-\\[50\\%\\] {\r
    width: 50%
}\r
.w-\\[125px\\] {\r
    width: 125px
}\r
.w-\\[167px\\] {\r
    width: 167px
}\r
.w-\\[600px\\] {\r
    width: 600px
}\r
.w-\\[100px\\] {\r
    width: 100px
}\r
.w-\\[500px\\] {\r
    width: 500px
}\r
.w-\\[20px\\] {\r
    width: 20px
}\r
.max-w-\\[265px\\] {\r
    max-width: 265px
}\r
.max-w-\\[136px\\] {\r
    max-width: 136px
}\r
.max-w-\\[960px\\] {\r
    max-width: 960px
}\r
.translate-x-\\[-50\\%\\] {\r
    --tw-translate-x: -50%;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
.translate-y-\\[10\\%\\] {\r
    --tw-translate-y: 10%;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
.translate-x-\\[50\\%\\] {\r
    --tw-translate-x: 50%;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
.cursor-pointer {\r
    cursor: pointer
}\r
.flex-col {\r
    flex-direction: column
}\r
.flex-wrap {\r
    flex-wrap: wrap
}\r
.items-start {\r
    align-items: flex-start
}\r
.items-center {\r
    align-items: center
}\r
.justify-start {\r
    justify-content: flex-start
}\r
.justify-end {\r
    justify-content: flex-end
}\r
.justify-center {\r
    justify-content: center
}\r
.justify-between {\r
    justify-content: space-between
}\r
.justify-around {\r
    justify-content: space-around
}\r
.overflow-hidden {\r
    overflow: hidden
}\r
.rounded-md {\r
    border-radius: 0.375rem
}\r
.rounded-full {\r
    border-radius: 9999px
}\r
.rounded-\\[5px\\] {\r
    border-radius: 5px
}\r
.rounded-tl-\\[40px\\] {\r
    border-top-left-radius: 40px
}\r
.rounded-tr-\\[40px\\] {\r
    border-top-right-radius: 40px
}\r
.border-y-2 {\r
    border-top-width: 2px;\r
    border-bottom-width: 2px
}\r
.bg-black {\r
    --tw-bg-opacity: 1;\r
    background-color: rgb(0 0 0 / var(--tw-bg-opacity))
}\r
.bg-\\[\\#000000cc\\] {\r
    background-color: #000000cc
}\r
.bg-transparent {\r
    background-color: transparent
}\r
.bg-gradient-to-t {\r
    background-image: linear-gradient(to top, var(--tw-gradient-stops))
}\r
.from-black {\r
    --tw-gradient-from: #000;\r
    --tw-gradient-to: rgb(0 0 0 / 0);\r
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}\r
.to-\\[\\#072C41\\] {\r
    --tw-gradient-to: #072C41
}\r
.p-10 {\r
    padding: 2.5rem
}\r
.py-5 {\r
    padding-top: 1.25rem;\r
    padding-bottom: 1.25rem
}\r
.py-10 {\r
    padding-top: 2.5rem;\r
    padding-bottom: 2.5rem
}\r
.py-20 {\r
    padding-top: 5rem;\r
    padding-bottom: 5rem
}\r
.px-10 {\r
    padding-left: 2.5rem;\r
    padding-right: 2.5rem
}\r
.py-40 {\r
    padding-top: 10rem;\r
    padding-bottom: 10rem
}\r
.py-6 {\r
    padding-top: 1.5rem;\r
    padding-bottom: 1.5rem
}\r
.pb-20 {\r
    padding-bottom: 5rem
}\r
.pb-3 {\r
    padding-bottom: 0.75rem
}\r
.pb-10 {\r
    padding-bottom: 2.5rem
}\r
.pb-5 {\r
    padding-bottom: 1.25rem
}\r
.text-left {\r
    text-align: left
}\r
.text-center {\r
    text-align: center
}\r
.text-\\[24px\\] {\r
    font-size: 24px
}\r
.text-\\[18px\\] {\r
    font-size: 18px
}\r
.text-\\[60px\\] {\r
    font-size: 60px
}\r
.text-\\[35px\\] {\r
    font-size: 35px
}\r
.font-\\[700\\] {\r
    font-weight: 700
}\r
.font-\\[900\\] {\r
    font-weight: 900
}\r
.font-light {\r
    font-weight: 300
}\r
.leading-\\[14\\.06px\\] {\r
    line-height: 14.06px
}\r
.text-white {\r
    --tw-text-opacity: 1;\r
    color: rgb(255 255 255 / var(--tw-text-opacity))
}\r
.text-yellow-500 {\r
    --tw-text-opacity: 1;\r
    color: rgb(234 179 8 / var(--tw-text-opacity))
}\r
.text-primary {\r
    --tw-text-opacity: 1;\r
    color: rgb(70 189 253 / var(--tw-text-opacity))
}\r
.opacity-70 {\r
    opacity: 0.7
}\r
.drop-shadow-title {\r
    --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));\r
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}\r
.transition {\r
    transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
    transition-duration: 150ms
}\r
        /* util */\r
        .wh-full {\r
    height: 100%;\r
    width: 100%
}\r
        .flex-xy-center {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    justify-content: center
}\r
\r
        .absolute-x-center {\r
    left: 50%;\r
    --tw-translate-x: -50%;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
\r
        .before\\:absolute::before {\r
    content: var(--tw-content);\r
    position: absolute
}\r
\r
        .before\\:h-\\[3px\\]::before {\r
    content: var(--tw-content);\r
    height: 3px
}\r
\r
        .before\\:w-\\[32px\\]::before {\r
    content: var(--tw-content);\r
    width: 32px
}\r
\r
        .before\\:rotate-45::before {\r
    content: var(--tw-content);\r
    --tw-rotate: 45deg;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
\r
        .before\\:rounded-lg::before {\r
    content: var(--tw-content);\r
    border-radius: 0.5rem
}\r
\r
        .before\\:bg-white::before {\r
    content: var(--tw-content);\r
    --tw-bg-opacity: 1;\r
    background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}\r
\r
        .after\\:absolute::after {\r
    content: var(--tw-content);\r
    position: absolute
}\r
\r
        .after\\:h-\\[3px\\]::after {\r
    content: var(--tw-content);\r
    height: 3px
}\r
\r
        .after\\:w-\\[32px\\]::after {\r
    content: var(--tw-content);\r
    width: 32px
}\r
\r
        .after\\:rotate-\\[-45deg\\]::after {\r
    content: var(--tw-content);\r
    --tw-rotate: -45deg;\r
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}\r
\r
        .after\\:rounded-lg::after {\r
    content: var(--tw-content);\r
    border-radius: 0.5rem
}\r
\r
        .after\\:bg-white::after {\r
    content: var(--tw-content);\r
    --tw-bg-opacity: 1;\r
    background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}\r
\r
        @media (min-width: 320px) {\r
    .\\32xs\\:w-\\[200px\\] {\r
        width: 200px
    }
}\r
\r
        @media (min-width: 414px) {\r
    .xs\\:right-\\[5\\%\\] {\r
        right: 5%
    }
}\r
\r
        @media (min-width: 640px) {\r
    .sm\\:static {\r
        position: static
    }\r
    .sm\\:bottom-\\[70\\%\\] {\r
        bottom: 70%
    }\r
    .sm\\:top-\\[25\\%\\] {\r
        top: 25%
    }\r
    .sm\\:right-0 {\r
        right: 0px
    }\r
    .sm\\:mb-0 {\r
        margin-bottom: 0px
    }\r
    .sm\\:mt-0 {\r
        margin-top: 0px
    }\r
    .sm\\:ml-auto {\r
        margin-left: auto
    }\r
    .sm\\:mb-3 {\r
        margin-bottom: 0.75rem
    }\r
    .sm\\:ml-\\[-5\\%\\] {\r
        margin-left: -5%
    }\r
    .sm\\:mr-2 {\r
        margin-right: 0.5rem
    }\r
    .sm\\:mr-5 {\r
        margin-right: 1.25rem
    }\r
    .sm\\:mr-0 {\r
        margin-right: 0px
    }\r
    .sm\\:block {\r
        display: block
    }\r
    .sm\\:inline {\r
        display: inline
    }\r
    .sm\\:flex {\r
        display: flex
    }\r
    .sm\\:hidden {\r
        display: none
    }\r
    .sm\\:h-\\[420px\\] {\r
        height: 420px
    }\r
    .sm\\:h-\\[143px\\] {\r
        height: 143px
    }\r
    .sm\\:w-\\[640px\\] {\r
        width: 640px
    }\r
    .sm\\:w-auto {\r
        width: auto
    }\r
    .sm\\:w-\\[350px\\] {\r
        width: 350px
    }\r
    .sm\\:w-\\[600px\\] {\r
        width: 600px
    }\r
    .sm\\:w-full {\r
        width: 100%
    }\r
    .sm\\:w-1\\/2 {\r
        width: 50%
    }\r
    .sm\\:w-\\[58\\%\\] {\r
        width: 58%
    }\r
    .sm\\:max-w-\\[360px\\] {\r
        max-width: 360px
    }\r
    .sm\\:max-w-\\[355px\\] {\r
        max-width: 355px
    }\r
    .sm\\:translate-y-\\[-10\\%\\] {\r
        --tw-translate-y: -10%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }\r
    .sm\\:flex-row {\r
        flex-direction: row
    }\r
    .sm\\:p-20 {\r
        padding: 5rem
    }\r
    .sm\\:pb-0 {\r
        padding-bottom: 0px
    }\r
    .sm\\:pt-14 {\r
        padding-top: 3.5rem
    }\r
    .sm\\:text-left {\r
        text-align: left
    }
}\r
\r
        @media (min-width: 768px) {\r
    .md\\:right-\\[8\\%\\] {\r
        right: 8%
    }\r
    .md\\:bottom-\\[10\\%\\] {\r
        bottom: 10%
    }\r
    .md\\:mt-0 {\r
        margin-top: 0px
    }\r
    .md\\:mb-0 {\r
        margin-bottom: 0px
    }\r
    .md\\:mb-10 {\r
        margin-bottom: 2.5rem
    }\r
    .md\\:block {\r
        display: block
    }\r
    .md\\:hidden {\r
        display: none
    }\r
    .md\\:h-\\[143px\\] {\r
        height: 143px
    }\r
    .md\\:w-\\[430px\\] {\r
        width: 430px
    }\r
    .md\\:w-auto {\r
        width: auto
    }\r
    .md\\:w-\\[330px\\] {\r
        width: 330px
    }\r
    .md\\:p-5 {\r
        padding: 1.25rem
    }\r
    .md\\:px-11 {\r
        padding-left: 2.75rem;\r
        padding-right: 2.75rem
    }\r
    .md\\:pr-24 {\r
        padding-right: 6rem
    }
}\r
\r
        @media (min-width: 1024px) {\r
    .lg\\:right-0 {\r
        right: 0px
    }\r
    .lg\\:mt-36 {\r
        margin-top: 9rem
    }\r
    .lg\\:h-screen {\r
        height: 100vh
    }\r
    .lg\\:w-\\[950px\\] {\r
        width: 950px
    }\r
    .lg\\:w-auto {\r
        width: auto
    }\r
    .lg\\:w-\\[442px\\] {\r
        width: 442px
    }\r
    .lg\\:flex-nowrap {\r
        flex-wrap: nowrap
    }\r
    .lg\\:px-20 {\r
        padding-left: 5rem;\r
        padding-right: 5rem
    }\r
    .lg\\:px-10 {\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem
    }\r
    .lg\\:pb-6 {\r
        padding-bottom: 1.5rem
    }\r
    .lg\\:pr-32 {\r
        padding-right: 8rem
    }
}`,Dn=`@tailwind utilities;\r
.fixed{\r
        position: fixed;\r
}\r
.absolute{\r
        position: absolute;\r
}\r
.relative{\r
        position: relative;\r
}\r
.bottom-0{\r
        bottom: 0px;\r
}\r
.right-\\[10\\%\\]{\r
        right: 10%;\r
}\r
.top-0{\r
        top: 0px;\r
}\r
.right-\\[-100\\%\\]{\r
        right: -100%;\r
}\r
.right-\\[5\\%\\]{\r
        right: 5%;\r
}\r
.bottom-1\\/2{\r
        bottom: 50%;\r
}\r
.left-0{\r
        left: 0px;\r
}\r
.top-\\[-30px\\]{\r
        top: -30px;\r
}\r
.top-\\[-10px\\]{\r
        top: -10px;\r
}\r
.bottom-\\[3\\%\\]{\r
        bottom: 3%;\r
}\r
.bottom-\\[5\\%\\]{\r
        bottom: 5%;\r
}\r
.left-1\\/2{\r
        left: 50%;\r
}\r
.bottom-\\[80\\%\\]{\r
        bottom: 80%;\r
}\r
.right-\\[50\\%\\]{\r
        right: 50%;\r
}\r
.left-\\[-50\\%\\]{\r
        left: -50%;\r
}\r
.top-\\[-4\\%\\]{\r
        top: -4%;\r
}\r
.right-\\[-30\\%\\]{\r
        right: -30%;\r
}\r
.left-\\[-20\\%\\]{\r
        left: -20%;\r
}\r
.z-\\[2\\]{\r
        z-index: 2;\r
}\r
.z-\\[-1\\]{\r
        z-index: -1;\r
}\r
.mx-auto{\r
        margin-left: auto;\r
        margin-right: auto;\r
}\r
.mr-5{\r
        margin-right: 1.25rem;\r
}\r
.mb-5{\r
        margin-bottom: 1.25rem;\r
}\r
.mt-10{\r
        margin-top: 2.5rem;\r
}\r
.mr-4{\r
        margin-right: 1rem;\r
}\r
.mb-12{\r
        margin-bottom: 3rem;\r
}\r
.mt-20{\r
        margin-top: 5rem;\r
}\r
.mt-3{\r
        margin-top: 0.75rem;\r
}\r
.mr-3{\r
        margin-right: 0.75rem;\r
}\r
.mb-20{\r
        margin-bottom: 5rem;\r
}\r
.mt-5{\r
        margin-top: 1.25rem;\r
}\r
.mb-10{\r
        margin-bottom: 2.5rem;\r
}\r
.block{\r
        display: block;\r
}\r
.flex{\r
        display: flex;\r
}\r
.hidden{\r
        display: none;\r
}\r
.h-\\[26px\\]{\r
        height: 26px;\r
}\r
.h-\\[11px\\]{\r
        height: 11px;\r
}\r
.h-screen{\r
        height: 100vh;\r
}\r
.h-\\[350px\\]{\r
        height: 350px;\r
}\r
.h-\\[85px\\]{\r
        height: 85px;\r
}\r
.h-full{\r
        height: 100%;\r
}\r
.h-\\[289px\\]{\r
        height: 289px;\r
}\r
.h-\\[116px\\]{\r
        height: 116px;\r
}\r
.h-\\[35px\\]{\r
        height: 35px;\r
}\r
.w-full{\r
        width: 100%;\r
}\r
.w-\\[320px\\]{\r
        width: 320px;\r
}\r
.w-\\[25px\\]{\r
        width: 25px;\r
}\r
.w-\\[85\\%\\]{\r
        width: 85%;\r
}\r
.w-screen{\r
        width: 100vw;\r
}\r
.w-\\[300px\\]{\r
        width: 300px;\r
}\r
.w-\\[116px\\]{\r
        width: 116px;\r
}\r
.w-\\[330px\\]{\r
        width: 330px;\r
}\r
.w-\\[310px\\]{\r
        width: 310px;\r
}\r
.w-\\[50\\%\\]{\r
        width: 50%;\r
}\r
.w-\\[125px\\]{\r
        width: 125px;\r
}\r
.w-\\[167px\\]{\r
        width: 167px;\r
}\r
.w-\\[600px\\]{\r
        width: 600px;\r
}\r
.w-\\[100px\\]{\r
        width: 100px;\r
}\r
.w-\\[500px\\]{\r
        width: 500px;\r
}\r
.w-\\[20px\\]{\r
        width: 20px;\r
}\r
.max-w-\\[265px\\]{\r
        max-width: 265px;\r
}\r
.max-w-\\[136px\\]{\r
        max-width: 136px;\r
}\r
.max-w-\\[960px\\]{\r
        max-width: 960px;\r
}\r
.translate-x-\\[-50\\%\\]{\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.translate-y-\\[10\\%\\]{\r
        --tw-translate-y: 10%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.translate-x-\\[50\\%\\]{\r
        --tw-translate-x: 50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.cursor-pointer{\r
        cursor: pointer;\r
}\r
.flex-col{\r
        flex-direction: column;\r
}\r
.flex-wrap{\r
        flex-wrap: wrap;\r
}\r
.items-start{\r
        align-items: flex-start;\r
}\r
.items-center{\r
        align-items: center;\r
}\r
.justify-start{\r
        justify-content: flex-start;\r
}\r
.justify-end{\r
        justify-content: flex-end;\r
}\r
.justify-center{\r
        justify-content: center;\r
}\r
.justify-between{\r
        justify-content: space-between;\r
}\r
.justify-around{\r
        justify-content: space-around;\r
}\r
.overflow-hidden{\r
        overflow: hidden;\r
}\r
.rounded-md{\r
        border-radius: 0.375rem;\r
}\r
.rounded-full{\r
        border-radius: 9999px;\r
}\r
.rounded-\\[5px\\]{\r
        border-radius: 5px;\r
}\r
.rounded-tl-\\[40px\\]{\r
        border-top-left-radius: 40px;\r
}\r
.rounded-tr-\\[40px\\]{\r
        border-top-right-radius: 40px;\r
}\r
.border-y-2{\r
        border-top-width: 2px;\r
        border-bottom-width: 2px;\r
}\r
.bg-black{\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));\r
}\r
.bg-\\[\\#000000cc\\]{\r
        background-color: #000000cc;\r
}\r
.bg-transparent{\r
        background-color: transparent;\r
}\r
.bg-gradient-to-t{\r
        background-image: linear-gradient(to top, var(--tw-gradient-stops));\r
}\r
.from-black{\r
        --tw-gradient-from: #000;\r
        --tw-gradient-to: rgb(0 0 0 / 0);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
}\r
.to-\\[\\#072C41\\]{\r
        --tw-gradient-to: #072C41;\r
}\r
.p-10{\r
        padding: 2.5rem;\r
}\r
.py-5{\r
        padding-top: 1.25rem;\r
        padding-bottom: 1.25rem;\r
}\r
.py-10{\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem;\r
}\r
.py-20{\r
        padding-top: 5rem;\r
        padding-bottom: 5rem;\r
}\r
.px-10{\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem;\r
}\r
.py-40{\r
        padding-top: 10rem;\r
        padding-bottom: 10rem;\r
}\r
.py-6{\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem;\r
}\r
.pb-20{\r
        padding-bottom: 5rem;\r
}\r
.pb-3{\r
        padding-bottom: 0.75rem;\r
}\r
.pb-10{\r
        padding-bottom: 2.5rem;\r
}\r
.pb-5{\r
        padding-bottom: 1.25rem;\r
}\r
.text-left{\r
        text-align: left;\r
}\r
.text-center{\r
        text-align: center;\r
}\r
.text-\\[24px\\]{\r
        font-size: 24px;\r
}\r
.text-\\[18px\\]{\r
        font-size: 18px;\r
}\r
.text-\\[60px\\]{\r
        font-size: 60px;\r
}\r
.text-\\[35px\\]{\r
        font-size: 35px;\r
}\r
.font-\\[700\\]{\r
        font-weight: 700;\r
}\r
.font-\\[900\\]{\r
        font-weight: 900;\r
}\r
.font-light{\r
        font-weight: 300;\r
}\r
.leading-\\[14\\.06px\\]{\r
        line-height: 14.06px;\r
}\r
.text-white{\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
.text-yellow-500{\r
        --tw-text-opacity: 1;\r
        color: rgb(234 179 8 / var(--tw-text-opacity));\r
}\r
.text-primary{\r
        --tw-text-opacity: 1;\r
        color: rgb(70 189 253 / var(--tw-text-opacity));\r
}\r
.opacity-70{\r
        opacity: 0.7;\r
}\r
.drop-shadow-title{\r
        --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
}\r
.transition{\r
        transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
}\r
/* util */\r
.wh-full{\r
        height: 100%;\r
        width: 100%;\r
}\r
.flex-xy-center{\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
}\r
.absolute-x-center{\r
        left: 50%;\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
/* font */\r
.title-secondary{\r
        font-size: 40px;\r
        font-weight: 700;\r
}\r
.title-tertiary{\r
        font-size: 30px;\r
        font-weight: 700;\r
}\r
.title-small{\r
        font-size: 18px;\r
        font-weight: 700;\r
}\r
.description{\r
        font-size: 12px;\r
        font-weight: 400;\r
}\r
/* -------------------------------\r
    components\r
    ------------------------------- */\r
/* Btn */\r
.primary-btn{\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(100 196 249 / var(--tw-bg-opacity));\r
        height: 48px;\r
        width: 136px;\r
        border-radius: 3px;\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
.secondary-btn{\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(10 78 116 / var(--tw-bg-opacity));\r
        height: 48px;\r
        width: 136px;\r
        border-radius: 3px;\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity));\r
}\r
/* gradient */\r
.bg-gradient-1 {\r
        background: linear-gradient(180deg, #062746b3 0%, #46bcff80 100%);\r
    }\r
.bg-gradient-2 {\r
        background: linear-gradient(360deg, #040e28e6 0%, #3287b9e6 97.92%, #65c6ffe6 100%);\r
    }\r
/* indecate */\r
.indecate{\r
        margin-bottom: 0.75rem;\r
        height: 10px;\r
        width: 10px;\r
        cursor: pointer;\r
        border-radius: 9999px;\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
.indecate.active{\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(70 189 255 / var(--tw-bg-opacity));\r
}\r
/* divider */\r
.divider-line-to-right {\r
        background: linear-gradient(90deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
.divider-line-to-left {\r
        background: linear-gradient(270deg, #FFE603 0%, #FFFFFF 23.96%, #FFE603 57.81%, #000000 81.25%, #000000 100%);\r
        height: 1px;\r
        width: 100%;\r
    }\r
.divider-line-blue{\r
        height: 1px;\r
        width: 100%;\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(70 189 255 / var(--tw-bg-opacity));\r
}\r
/* -------------------------------\r
design system\r
------------------------------- */\r
.home-scetion1-wrap{\r
        position: relative;\r
        display: flex;\r
        width: 100%;\r
        flex-direction: column;\r
        justify-content: center;\r
}\r
@media (min-width: 768px){\r
        .home-scetion1-wrap{\r
                min-height: 900px;\r
        }\r
}\r
@media (min-width: 1024px){\r
        .home-scetion1-wrap{\r
                height: 100vh;\r
        }\r
}\r
.home-section1-container{\r
        position: relative;\r
        z-index: 1;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
}\r
@media (min-width: 1024px){\r
        .home-section1-container{\r
                margin-top: 6rem;\r
        }\r
}\r
.home-section1-title{\r
        width: 300px;\r
        text-align: center;\r
        --tw-drop-shadow: drop-shadow(0px 4px 4px rgba(49,209,231,0.77));\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
        font-size: 30px;\r
        font-weight: 700;\r
}\r
@media (min-width: 640px){\r
        .home-section1-title{\r
                width: auto;\r
                font-size: 40px;\r
                font-weight: 700;\r
        }\r
}\r
@media (min-width: 768px){\r
        .home-section1-title{\r
                margin-top: 10rem;\r
        }\r
}\r
@media (min-width: 1024px){\r
        .home-section1-title{\r
                margin-top: 0px;\r
        }\r
}\r
.pc-bg{\r
        display: none;\r
}\r
@media (min-width: 640px){\r
        .pc-bg{\r
                display: block;\r
        }\r
        .mobile-bg{\r
                display: none;\r
        }\r
}\r
.home-ox{\r
        position: absolute;\r
        bottom: 0px;\r
        display: none;\r
        max-width: 475px;\r
}\r
@media (min-width: 640px){\r
        .home-ox{\r
                display: block;\r
        }\r
}\r
.home-lady{\r
        position: absolute;\r
        bottom: 0px;\r
        right: 0px;\r
        display: none;\r
        max-width: 475px;\r
}\r
@media (min-width: 640px){\r
        .home-lady{\r
                display: block;\r
        }\r
}\r
.home-section1-arror-wrap{\r
        position: relative;\r
        margin-top: 2.5rem;\r
        margin-bottom: 2.5rem;\r
        width: 100%;\r
}\r
.home-section1-arror{\r
        position: absolute;\r
        left: 50%;\r
        --tw-translate-x: -50%;\r
        top: 50%;\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
/* \u5171\u7528 */\r
.home-section1-bg{\r
        position: absolute;\r
        height: 100%;\r
        width: 100%;\r
        -o-object-fit: cover;\r
           object-fit: cover;\r
        -o-object-position: center;\r
           object-position: center;\r
}\r
.before\\:absolute::before{\r
        content: var(--tw-content);\r
        position: absolute;\r
}\r
.before\\:h-\\[3px\\]::before{\r
        content: var(--tw-content);\r
        height: 3px;\r
}\r
.before\\:w-\\[32px\\]::before{\r
        content: var(--tw-content);\r
        width: 32px;\r
}\r
.before\\:rotate-45::before{\r
        content: var(--tw-content);\r
        --tw-rotate: 45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.before\\:rounded-lg::before{\r
        content: var(--tw-content);\r
        border-radius: 0.5rem;\r
}\r
.before\\:bg-white::before{\r
        content: var(--tw-content);\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
.after\\:absolute::after{\r
        content: var(--tw-content);\r
        position: absolute;\r
}\r
.after\\:h-\\[3px\\]::after{\r
        content: var(--tw-content);\r
        height: 3px;\r
}\r
.after\\:w-\\[32px\\]::after{\r
        content: var(--tw-content);\r
        width: 32px;\r
}\r
.after\\:rotate-\\[-45deg\\]::after{\r
        content: var(--tw-content);\r
        --tw-rotate: -45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
}\r
.after\\:rounded-lg::after{\r
        content: var(--tw-content);\r
        border-radius: 0.5rem;\r
}\r
.after\\:bg-white::after{\r
        content: var(--tw-content);\r
        --tw-bg-opacity: 1;\r
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r
}\r
@media (min-width: 320px){\r
        .\\32xs\\:w-\\[200px\\]{\r
                width: 200px;\r
        }\r
}\r
@media (min-width: 414px){\r
        .xs\\:right-\\[5\\%\\]{\r
                right: 5%;\r
        }\r
}\r
@media (min-width: 640px){\r
        .sm\\:static{\r
                position: static;\r
        }\r
        .sm\\:bottom-\\[70\\%\\]{\r
                bottom: 70%;\r
        }\r
        .sm\\:top-\\[25\\%\\]{\r
                top: 25%;\r
        }\r
        .sm\\:right-0{\r
                right: 0px;\r
        }\r
        .sm\\:mb-0{\r
                margin-bottom: 0px;\r
        }\r
        .sm\\:mt-0{\r
                margin-top: 0px;\r
        }\r
        .sm\\:ml-auto{\r
                margin-left: auto;\r
        }\r
        .sm\\:mb-3{\r
                margin-bottom: 0.75rem;\r
        }\r
        .sm\\:ml-\\[-5\\%\\]{\r
                margin-left: -5%;\r
        }\r
        .sm\\:mr-2{\r
                margin-right: 0.5rem;\r
        }\r
        .sm\\:mr-5{\r
                margin-right: 1.25rem;\r
        }\r
        .sm\\:mr-0{\r
                margin-right: 0px;\r
        }\r
        .sm\\:block{\r
                display: block;\r
        }\r
        .sm\\:inline{\r
                display: inline;\r
        }\r
        .sm\\:flex{\r
                display: flex;\r
        }\r
        .sm\\:hidden{\r
                display: none;\r
        }\r
        .sm\\:h-\\[420px\\]{\r
                height: 420px;\r
        }\r
        .sm\\:h-\\[143px\\]{\r
                height: 143px;\r
        }\r
        .sm\\:w-\\[640px\\]{\r
                width: 640px;\r
        }\r
        .sm\\:w-auto{\r
                width: auto;\r
        }\r
        .sm\\:w-\\[350px\\]{\r
                width: 350px;\r
        }\r
        .sm\\:w-\\[600px\\]{\r
                width: 600px;\r
        }\r
        .sm\\:w-full{\r
                width: 100%;\r
        }\r
        .sm\\:w-1\\/2{\r
                width: 50%;\r
        }\r
        .sm\\:w-\\[58\\%\\]{\r
                width: 58%;\r
        }\r
        .sm\\:max-w-\\[360px\\]{\r
                max-width: 360px;\r
        }\r
        .sm\\:max-w-\\[355px\\]{\r
                max-width: 355px;\r
        }\r
        .sm\\:translate-y-\\[-10\\%\\]{\r
                --tw-translate-y: -10%;\r
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r
        }\r
        .sm\\:flex-row{\r
                flex-direction: row;\r
        }\r
        .sm\\:p-20{\r
                padding: 5rem;\r
        }\r
        .sm\\:pb-0{\r
                padding-bottom: 0px;\r
        }\r
        .sm\\:pt-14{\r
                padding-top: 3.5rem;\r
        }\r
        .sm\\:text-left{\r
                text-align: left;\r
        }\r
        .sm\\:title-primary{\r
                font-size: 40px;\r
                font-weight: 700;\r
        }\r
\r
        .sm\\:title-secondary{\r
                font-size: 40px;\r
                font-weight: 700;\r
        }\r
}\r
@media (min-width: 768px){\r
        .md\\:right-\\[8\\%\\]{\r
                right: 8%;\r
        }\r
        .md\\:bottom-\\[10\\%\\]{\r
                bottom: 10%;\r
        }\r
        .md\\:mt-0{\r
                margin-top: 0px;\r
        }\r
        .md\\:mb-0{\r
                margin-bottom: 0px;\r
        }\r
        .md\\:mb-10{\r
                margin-bottom: 2.5rem;\r
        }\r
        .md\\:block{\r
                display: block;\r
        }\r
        .md\\:hidden{\r
                display: none;\r
        }\r
        .md\\:h-\\[143px\\]{\r
                height: 143px;\r
        }\r
        .md\\:w-\\[430px\\]{\r
                width: 430px;\r
        }\r
        .md\\:w-auto{\r
                width: auto;\r
        }\r
        .md\\:w-\\[330px\\]{\r
                width: 330px;\r
        }\r
        .md\\:p-5{\r
                padding: 1.25rem;\r
        }\r
        .md\\:px-11{\r
                padding-left: 2.75rem;\r
                padding-right: 2.75rem;\r
        }\r
        .md\\:pr-24{\r
                padding-right: 6rem;\r
        }\r
}\r
@media (min-width: 1024px){\r
        .lg\\:right-0{\r
                right: 0px;\r
        }\r
        .lg\\:mt-36{\r
                margin-top: 9rem;\r
        }\r
        .lg\\:h-screen{\r
                height: 100vh;\r
        }\r
        .lg\\:w-\\[950px\\]{\r
                width: 950px;\r
        }\r
        .lg\\:w-auto{\r
                width: auto;\r
        }\r
        .lg\\:w-\\[442px\\]{\r
                width: 442px;\r
        }\r
        .lg\\:flex-nowrap{\r
                flex-wrap: nowrap;\r
        }\r
        .lg\\:px-20{\r
                padding-left: 5rem;\r
                padding-right: 5rem;\r
        }\r
        .lg\\:px-10{\r
                padding-left: 2.5rem;\r
                padding-right: 2.5rem;\r
        }\r
        .lg\\:pb-6{\r
                padding-bottom: 1.5rem;\r
        }\r
        .lg\\:pr-32{\r
                padding-right: 8rem;\r
        }\r
}`,Hn=`\r
    /* TheHeader */\r
    .the-header {\r
    z-index: 2;\r
    display: none;\r
    width: 100%;\r
    padding-top: 1rem;\r
    padding-bottom: 1rem
}\r
    @media (min-width: 768px) {\r
    .the-header {\r
        display: block
    }
}\r
    .the-header-ul {\r
    margin-left: auto;\r
    margin-right: auto;\r
    display: flex;\r
    max-width: 1000px;\r
    align-items: center;\r
    justify-content: space-around
}\r
    \r
    /* -------------------------------\r
    tansition\u3001animate\r
    ------------------------------- */\r
    \r
    /* mobile header panel animate */`;function A(){function i(t){return new URL({"../../assets/images/amazing-games 1.png":Z,"../../assets/images/Android-Logo-2014-2019 1.png":$,"../../assets/images/apple-logo-transparent copy 1.png":nn,"../../assets/images/Artboard 1 1.png":rn,"../../assets/images/Artboard 1 2.png":tn,"../../assets/images/Artboard 1 3.png":en,"../../assets/images/BA 1.png":on,"../../assets/images/caishen-a2 1.png":an,"../../assets/images/calender.png":sn,"../../assets/images/Dialy Promotion 1024x1024 1.png":dn,"../../assets/images/downloadIcon.png":ln,"../../assets/images/dream-of-macau_casino lady4 1.png":pn,"../../assets/images/enterFG_fighter_red 1.png":cn,"../../assets/images/fb.png":wn,"../../assets/images/fortune-ox_4 1.png":gn,"../../assets/images/header-logo 1.png":mn,"../../assets/images/homeIcon.png":hn,"../../assets/images/HOW TO 1.png":bn,"../../assets/images/ia_100000469 1.png":xn,"../../assets/images/ia_200000002 1.png":fn,"../../assets/images/ia_200000008 1.png":un,"../../assets/images/image 1.png":yn,"../../assets/images/line.png":An,"../../assets/images/line@.png":vn,"../../assets/images/lobby-bg 1.png":kn,"../../assets/images/lobby-mbg 3.png":_n,"../../assets/images/pinterest.png":Cn,"../../assets/images/Polygon 1.png":zn,"../../assets/images/Polygon 5.png":Sn,"../../assets/images/Polygon 6.png":Rn,"../../assets/images/pwa 1.png":Bn,"../../assets/images/treasures-of-aztec_lady1 1.png":En,"../../assets/images/VIP 4 Get 39 700x300 1.png":In,"../../assets/images/vip1.png":Yn,"../../assets/images/vip2.png":Un,"../../assets/images/vip3.png":Fn,"../../assets/images/vip4.png":jn,"../../assets/images/vip5.png":Pn,"../../assets/images/vip6.png":Xn,"../../assets/images/welcome 1.png":Qn,"../../assets/images/youtube.png":Tn,"../../assets/style/base.css":Ln,"../../assets/style/designSystem.css":Vn,"../../assets/style/layout.css":Nn,"../../assets/style/style.css":On,"../../assets/style/util.css":Mn,"../../assets/style/components/homePageSection1.css":Dn,"../../assets/style/components/theHeader.css":Hn}[`../../assets/${t}`],self.location).href}return{getAssetsFileURL:i}}const Jn=C(null),z=C("bg-transparent");function I(){function i(){window.addEventListener("scroll",t)}function t(){let s=window.scrollY;s>1?z.value="bg-black bg-gradient-to-t from-black to-[#072C41]":s===0&&(z.value="bg-transparent")}return{headerEle:Jn,headerColor:z,registryScroll:i}}const Gn={class:"the-header-ul"},Wn={class:"hidden sm:block"},Kn={class:"flex flex-col items-center"},qn=b({setup(i){const{getAssetsFileURL:t}=A(),{headerColor:s,headerEle:n}=I();return(r,e)=>{const d=_("router-link");return m(),h("nav",{class:L(["the-header",[a(s)]]),ref_key:"headerEle",ref:n},[o("ul",Gn,[o("li",null,[l(d,{to:"/HowToPage"},{default:c(()=>[g(p(r.$t("header.howToUse")),1)]),_:1})]),o("li",null,[l(d,{to:"/DownloadPage"},{default:c(()=>[g(p(r.$t("header.download")),1)]),_:1})]),o("li",Wn,[l(d,{to:"/PromotionsPage"},{default:c(()=>[g(p(r.$t("header.promotion")),1)]),_:1})]),o("li",Kn,[l(y,{"img-path":a(t)("images/header-logo 1.png")},null,8,["img-path"]),l(E)]),o("li",null,[l(d,{to:"/VipPage"},{default:c(()=>[g(p(r.$t("header.VIP")),1)]),_:1})]),o("li",null,[l(d,{to:"/QAPage"},{default:c(()=>[g(p(r.$t("header.commonProblem")),1)]),_:1})]),o("li",null,[l(d,{to:"/ContactPage"},{default:c(()=>[g(p(r.$t("header.support")),1)]),_:1})])])],2)}}}),Zn=b({props:{closeHandler:null},setup(i){return(t,s)=>(m(),h("div",{class:"relative before:absolute before:w-[32px] before:h-[3px] before:rounded-lg before:bg-white before:rotate-45 after:absolute after:w-[32px] after:h-[3px] after:rounded-lg after:bg-white after:rotate-[-45deg]",onClick:s[0]||(s[0]=n=>i.closeHandler())}))}}),v=C(!1);function Y(){function i(){v.value=!v.value;let t=document.getElementById("app");v.value?(document.body.style.overflow="hidden",t.style.overflow="hidden"):(document.body.style.overflow="auto",t.style.overflow="auto")}return{show:v,handleHeaderPanel:i}}const $n={class:"relative w-[85%] px-10"},nr={class:"h-[350px] flex flex-col justify-between text-center mb-12"},rr=b({setup(i){const{getAssetsFileURL:t}=A(),{show:s,handleHeaderPanel:n}=Y();return(r,e)=>{const d=_("router-link");return B((m(),h("div",{class:"text-white bg-[#000000cc] w-full h-screen flex flex-col items-center py-20",onTouchmove:e[6]||(e[6]=k(()=>{},["prevent"])),onScroll:e[7]||(e[7]=k(()=>{},["prevent"]))},[o("div",$n,[l(Zn,{class:"right-[-100%]",closeHandler:a(n)},null,8,["closeHandler"])]),o("ul",nr,[o("li",{onClick:e[0]||(e[0]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/HowToPage"},{default:c(()=>[g(p(r.$t("header.howToUse")),1)]),_:1})]),o("li",{onClick:e[1]||(e[1]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/DownloadPage"},{default:c(()=>[g(p(r.$t("header.download")),1)]),_:1})]),o("li",{onClick:e[2]||(e[2]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/PromotionsPage"},{default:c(()=>[g(p(r.$t("header.promotion")),1)]),_:1})]),o("li",{onClick:e[3]||(e[3]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/VipPage"},{default:c(()=>[g(p(r.$t("header.VIP")),1)]),_:1})]),o("li",{onClick:e[4]||(e[4]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/QAPage"},{default:c(()=>[g(p(r.$t("header.commonProblem")),1)]),_:1})]),o("li",{onClick:e[5]||(e[5]=(...w)=>a(n)&&a(n)(...w))},[l(d,{to:"/ContactPage"},{default:c(()=>[g(p(r.$t("header.support")),1)]),_:1})])]),l(y,{"img-path":a(t)("images/header-logo 1.png"),onClick:a(n)},null,8,["img-path","onClick"]),l(E)],544)),[[V,a(s)]])}}}),tr={class:"md:hidden w-full py-10 z-[2] relative flex flex-xy-center"},er=b({setup(i){const{getAssetsFileURL:t}=A(),{show:s,handleHeaderPanel:n}=Y();return(r,e)=>(m(),h("div",tr,[l(y,{"img-path":a(t)("images/header-logo 1.png")},null,8,["img-path"]),o("div",{class:"w-[25px] h-[11px] border-y-2 absolute right-[10%]",onClick:e[0]||(e[0]=(...d)=>a(n)&&a(n)(...d))}),l(N,{name:"headerFade"},{default:c(()=>[l(rr,{class:"absolute top-0",show:a(s)},null,8,["show"])]),_:1})]))}}),or={class:"w-full flex-xy-center py-5"},ar={class:"w-[320px] pb-20 flex flex-col items-center sm:w-[640px] sm:flex-row sm:pb-0 lg:w-[950px]"},ir={class:"flex flex-col sm:flex-row items-center"},sr={class:"text-center sm:text-left max-w-[265px]"},dr={class:"title-small pb-3"},lr={class:"description"},pr={class:"flex mt-10 sm:mt-0 sm:ml-auto"},cr=["src"],wr=["src"],gr=["src"],mr=["src"],hr=b({setup(i){const{getAssetsFileURL:t}=A();return(s,n)=>(m(),h("div",or,[o("div",ar,[o("div",ir,[l(y,{class:"mr-5 mb-5 sm:mb-0","img-path":a(t)("images/header-logo 1.png")},null,8,["img-path"]),o("article",sr,[o("h1",dr,p(s.$t("footer.title")),1),o("p",lr,p(s.$t("footer.description")),1)])]),o("div",pr,[o("img",{class:"h-[26px] mr-4",src:a(t)("images/fb.png"),alt:"FB"},null,8,cr),o("img",{class:"h-[26px] mr-4",src:a(t)("images/youtube.png"),alt:"youtube"},null,8,wr),o("img",{class:"h-[26px] mr-4",src:a(t)("images/line.png"),alt:"line"},null,8,gr),o("img",{class:"h-[26px] mr-4",src:a(t)("images/pinterest.png"),alt:"pinterest"},null,8,mr)])])]))}}),br={class:"sm:hidden w-screen h-[85px] relative bg-gradient-2 bg-black text-white rounded-tl-[40px] rounded-tr-[40px]"},xr={class:"w-[85%] h-full mx-auto flex justify-around items-center"},fr=["src"],ur=["src"],yr=["src"],Ar=b({setup(i){const{getAssetsFileURL:t}=A();return(s,n)=>(m(),h("div",br,[o("ul",xr,[o("li",null,[l(y,{"img-path":a(t)("images/homeIcon.png")},null,8,["img-path"])]),o("li",null,[o("img",{src:a(t)("images/calender.png"),alt:"homeIcon"},null,8,fr)]),o("li",null,[o("img",{src:a(t)("images/downloadIcon.png"),alt:"homeIcon"},null,8,ur)]),o("li",null,[o("img",{src:a(t)("images/line@.png"),alt:"homeIcon"},null,8,yr)])])]))}}),vr={class:"fixed bottom-0 z-[2]"},kr=b({setup(i){const{registryScroll:t}=I();return R(()=>{t()}),(s,n)=>{const r=_("router-view");return m(),h("div",{class:"bg-black text-white",ref:"app",onTouchmove:n[0]||(n[0]=k(()=>{},["prevent"])),onScroll:n[1]||(n[1]=k(()=>{},["prevent"]))},[l(qn,{class:"fixed"}),l(er),l(r),l(hr),o("div",vr,[l(Ar)])],544)}}}),_r={howToUse:"\u5982\u4F55\u4F7F\u7528",download:"\u4E0B\u8F09",promotion:"\u6649\u5347",VIP:"VIP",commonProblem:"\u5E38\u898B\u554F\u984C",support:"\u652F\u6301"},Cr={section1:{title:"\u6CF0\u570B\u6700\u597D\u7684\u7DB2\u8DEFslot-Ruai99"},section2:{title:"Ruai99-\u6CF0\u570B\u6700\u597D\u7684\u61C9\u7528\u7A0B\u5F0F",description:"\u6700\u73FE\u4EE3\u7684HTML5\u904A\u6232\uFF0C\u5FEB\u4F86Ruai99\u548C\u6211\u5011\u4E00\u8D77\u73A9\u8001\u864E\u6A5F\u904A\u6232\u5427!"},section3:{title:"Amazing game",description:"\u6211\u5011\u6BCF\u5929\u90FD\u6703\u66F4\u65B0\u65B0\u904A\u6232\u3002\u7121\u8AD6\u662F\u8001\u864E\u6A5F\u3001\u91E3\u9B5A\u3001\u7D19\u724C\u904A\u6232\uFF0C\u6211\u5011\u90FD\u9078\u64C7\u512A\u79C0\u7684\u904A\u6232\u3001\u6613\u65BC\u904A\u73A9\u548C\u7372\u5F97\u771F\u9322\u7684\u6D41\u884C\u904A\u6232",description1:"\u6211\u5011\u7684\u904A\u6232\u70BA\u60A8\u63D0\u4F9B\u8D85\u904E2000\u6B3E\u8001\u864E\u6A5F\u904A\u6232\uFF0C\u8B93\u60A8\u76E1\u60C5\u4EAB\u53D7\u75C5\u8D0F\u53D6\u734E\u91D1\u3002\u6975\u81F4\u7684\u4E16\u754C\u7D1A\u5A1B\u6A02\u9AD4\u9A57\u53EF\u4EE5\u5728\u684C\u9762\u548C\u79FB\u52D5\u8A2D\u5099\u4E0A\u5B8C\u7684\u7D42\u6975\u6A19\u6E96\u904A\u6232\u3002\u96A8\u6642\u96A8\u5730\u4EAB\u53D7\u6A02\u8DA3\u3002\u5F9E\u6211\u5011\u9019\u88E1\u627E\u5230\u5F88\u591A\u65B0\u7684\u6A02\u8DA3!",description2:"\u6211\u5011\u7684\u57FA\u790E\u8A2D\u8A08\u4F86\u81EA\u6211\u5011\u7684\u958B\u767C\u5718\u968A\uFF0C\u5E36\u4F86\u4E0D\u65B7\u8ABF\u6574\u548C\u958B\u767C\u7684\u904A\u6232\u3002\u7D66\u60A8\u73A9\u5404\u7A2E\u904A\u6232\u7684\u9AD4\u9A57\u3001\u6613\u65BC\u8A2A\u554F\u548C\u611F\u77E5\u7684\u904A\u6232\u3002\u518D\u73FE\u904A\u6232\u8D85\u904E2\u5343\u6B3E\uFF0C\u65B0\u904A\u6232\u4E0D\u65B7\u66F4\u65B0\u3001\u4E0D\u65B7\u6DFB\u52A0\u3002"},section4:{title:"\u70BA\u4F55\u9078\u64C7 Ruai99",description1:"\u60F3\u5728\u624B\u6A5F\u4E0A\u73A9Ruai99\u7684\u5C0F\u5925\u4F34\u5011\uFF0C\u53EF\u4EE5\u5728IOS\u53CA\u5B89\u5353\u7CFB\u7D71\u4E0A\u4E0B\u8F09\u5B89\u88DD\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u4E86\u89E3\u5B89\u88DD\u8A73\u60C5\u3002\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u5168\u592924\u5C0F\u6642\u806F\u7E6B\u7BA1\u7406\u54E1\u3002",acent:"\u770B\u66F4\u591A +",description2:"\u7121\u8AD6\u662F\u5728\u904A\u6232\u3001\u8001\u864E\u6A5F\u548C\u8A31\u591A\u4E0D\u540C\u7684\u9B5A\u985E\u5C04\u64CA\u904A\u6232\u4E2D\uFF0C\u6BCF\u5468\u90FD\u6709\u66F4\u65B0\uFF0C\u4EE4\u4EBA\u6109\u6085\u3002\u591A\u905450\u6B3E\u6613\u65BC\u904A\u73A9\u7684\u9B5A\u5C04\u64CA\u904A\u6232\u4ECD\u5728\u4E0D\u65B7\u66F4\u65B0\u548C\u6DFB\u52A0\u65B0\u904A\u6232\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8CFA\u9322\uFF0C\u6BBA\u9B5A\u5BB9\u6613\uFF0C\u4EAB\u53D7\u6700\u6709\u8DA3\u7684\u904A\u6232\u7531\u73A9\u4E00\u6574\u5929\u4E0D\u89BA\u5F97\u7121\u804A\u3002",description3:"Ruai99\u5728\u6CF0\u570B\u6392\u540D\u7B2C\u4E00\u7684\u8001\u864E\u6A5F\u904A\u6232\uFF0C\u6613\u65BC\u7533\u8ACB\uFF0C\u4E26\u6709\u81EA\u52D5\u5B58\u53D6\u6B3E\u7CFB\u7D71\u3002\u56E0\u6B64\u6211\u5011\u76F8\u4FE1\u524D\u4F86\u904A\u73A9\u7684\u5BA2\u6236\u5C07\u7372\u5F97\u7A69\u5B9A\u7684\u9322\u8CA1\u548C\u5145\u5206\u7684\u5A1B\u6A02\u3002\u9019\u65E2\u50CF\u5728\u4E00\u500B\u771F\u6B63\u7684\u8CED\u5834\u4E00\u6A23\u3002\u6211\u5011\u627F\u8AFE\u904A\u6232\u958B\u767C\u7CFB\u7D71\u3002\u4E14\u670D\u52D9\u7E3D\u4E8B\u66F4\u597D\u3001\u5728\u6CF0\u570B\u6700\u5927\u7684\u5728\u7DDA\u8CED\u535A\u61C9\u7528Ruai99\u3002"}},zr={title:"\u6B61\u8FCE\u4F86\u5230 Ruai99",description:"\u4EAB\u53D7\u6700\u4F73\u904A\u6232\u9AD4\u9A57\u3002\u7533\u8ACB\u6703\u54E1\u6642\uFF0C\u5373\u6642\u6536\u5230\u65B0\u805E\u548C\u4FC3\u92B7\u4FE1\u606F\u3002"},Sr={systemCard:{IOS:{primaryBtnText:"\u5982\u4F55\u5B89\u88DD",secondaryBtnText:"\u99AC\u4E0A\u4E0B\u8F09",description:"\u4F7F\u7528IOS\u7CFB\u7D71\u7684\u64AD\u653E\u5668\u53EF\u8F15\u9B06\u4E0B\u8F09\u61C9\u7528\uFF0C\u5FEB\u901F\u9000\u51FA",description2:"\u652F\u6301IOS 11.0 \u53CA\u4EE5\u4E0A\u7248\u672C"},Android:{primaryBtnText:"\u5982\u4F55\u5B89\u88DD",secondaryBtnText:"\u99AC\u4E0A\u4E0B\u8F09",slogan:"500,000+ Downloaded",description:"\u5B89\u5353\u64AD\u653E\u5668\u53EF\u8B93\u60A8\u8F15\u9B06\u52A0\u8F09\u61C9\u7528\u7A0B\u5E8F\u3002",description2:"\u5FEB\u901F\u5B58\u53D6\u6B3E\uFF0C",description3:"\u652F\u6301Android 5.1 \u53CA\u4EE5\u4E0A\u7248\u672C"},PWA:{secondaryBtnText:"\u99AC\u4E0A\u73A9",description:"\u4E0D\u9593\u65B7\u5730\u73A9\u96FB\u8166",description2:"\u9AD4\u9A57\u9A5A\u4EBA\u7684\u5716\u5F62"}}};var Rr={header:_r,homePage:Cr,footer:zr,card:Sr};const Br={howToUse:"How to use",download:"Download",promotion:"promotion",VIP:"VIP",commonProblem:"Common problem",support:"Support"},Er={section1:{title:"The best online slots in Thailand Ruai99"},section2:{title:"Ruai99, the best application in Thailand",description:"With modern HTML5 games Come and play your favorite slot games with us Ruai99."},section3:{title:"Amazing game",description:"We update new games every day. Whether it's slots games, fish shooting games, card games, by all games, we have selected outstanding games, popular games that are easy to play and get real money.",description1:"Our games offer you more than 2000 slots games for you to enjoy and win a bonus jackpot. Extreme with world-class entertainment The ultimate standard game that can be played on both desktop and mobile. Take the fun wherever and whenever you want. Find a lot of new fun from us.",description2:"From our developer team We designed it from the basics of the players. We bring all the games to be adjusted and developed continuously. To give you the experience of playing various games at full efficiency The format of the game is easily accessible and perceptible. There are more than 2000 games online and new games are updated. continually added"},section4:{title:"Why Ruai99",description1:"For those who want to play Ruai99 on mobile, you can download and install the app on both IOS and Android systems. You can click on the button below for installation details. For more information You can contact the admin 24 hours a day.",acent:"See more +",description2:"Whether in the section of games, slots and many different fish shooting games With new arrivals every week, it can be called pleasing for both slots and fish shooting games. Easy to play fish shooting game and get money fast Easy to kill fish and the most fun Play all day without getting bored With up to 50 fish shooting games and still updating and adding new ones. continuously",description3:"Ruai99, the number 1 slot app in Thailand, easy to apply, automatic deposit and withdrawal system. with experience We are therefore confident that customers who come to play will receive financial stability and full entertainment. It's like being in a real casino. We promise we will develop the game system. And the service is always better, Ruai99, the largest online gambling app in Thailand."}},Ir={title:"Welcome to Ruai99",description:"And enjoy the best gaming experience. When applying for membership, receive instant news and promotions."},Yr={systemCard:{IOS:{primaryBtnText:"how to install",secondaryBtnText:"Download now",description:"Player using iOS system Can load apps easily, ",description2:"withdraw quickly, support iOS 11.0 and above"},Android:{primaryBtnText:"how to install",secondaryBtnText:"Download now",slogan:"500,000+ Downloaded",description:"Android players You can easily load the app.",description2:"Fast deposit and withdrawal,",description3:"support Android 5.1 and above"},PWA:{secondaryBtnText:"play now",description:"Play through the computer without interruption.",description2:"Experience amazing graphics."}}};var Ur={header:Br,homePage:Er,footer:Ir,card:Yr};const Fr={howToUse:"\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A",download:"\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",promotion:"\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19",VIP:"VIP",commonProblem:"\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22",support:"\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19"},jr={section1:{title:"\u0E2A\u0E25\u0E47\u0E2D\u0E15\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E44\u0E17\u0E22 Ruai99"},section2:{title:"Ruai99 \u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E44\u0E17\u0E22",description:"\u0E14\u0E49\u0E27\u0E22\u0E40\u0E01\u0E21\u0E2A\u0E4C HTML5 \u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E40\u0E0A\u0E34\u0E0D\u0E21\u0E32\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E2A\u0E25\u0E47\u0E2D\u0E15\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32 Ruai99"},section3:{title:"\u0E2D\u0E40\u0E21\u0E0B\u0E34\u0E48\u0E07\u0E40\u0E01\u0E21",description:"\u0E40\u0E23\u0E32\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E40\u0E01\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E25\u0E47\u0E2D\u0E15 \u0E40\u0E01\u0E21\u0E22\u0E34\u0E07\u0E1B\u0E25\u0E32 \u0E40\u0E01\u0E21\u0E44\u0E1E\u0E48 \u0E42\u0E14\u0E22\u0E40\u0E01\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E04\u0E31\u0E14\u0E2A\u0E23\u0E23\u0E40\u0E01\u0E21\u0E40\u0E14\u0E48\u0E19 \u0E40\u0E01\u0E21\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21 \u0E17\u0E35\u0E48\u0E40\u0E25\u0E48\u0E19\u0E07\u0E48\u0E32\u0E22\u0E44\u0E14\u0E49\u0E40\u0E07\u0E34\u0E19\u0E08\u0E23\u0E34\u0E07",description1:"\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E2A\u0E25\u0E47\u0E2D\u0E15\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 2000 \u0E40\u0E01\u0E21\u0E2A\u0E4C \u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E2A\u0E19\u0E38\u0E01\u0E41\u0E25\u0E30\u0E25\u0E38\u0E49\u0E19\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E41\u0E08\u0E4A\u0E04\u0E1E\u0E47\u0E2D\u0E15 \u0E2A\u0E38\u0E14\u0E40\u0E2B\u0E27\u0E35\u0E48\u0E22\u0E07\u0E01\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E31\u0E19\u0E40\u0E17\u0E34\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E25\u0E01 \u0E2A\u0E38\u0E14\u0E22\u0E2D\u0E14\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E1A\u0E19\u0E40\u0E14\u0E2A\u0E17\u0E47\u0E2D\u0E1B\u0E41\u0E25\u0E30\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D \u0E1E\u0E01\u0E1E\u0E32\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E38\u0E01\u0E44\u0E1B\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E17\u0E35\u0E48\u0E17\u0E38\u0E01\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 \u0E1E\u0E1A\u0E01\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E38\u0E01\u0E43\u0E2B\u0E21\u0E48\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22\u0E08\u0E32\u0E01\u0E40\u0E23\u0E32",description2:"\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E1C\u0E39\u0E49\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32 \u0E40\u0E23\u0E32\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E25\u0E31\u0E01 \u0E42\u0E14\u0E22\u0E40\u0E23\u0E32\u0E19\u0E33\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E21\u0E32\u0E17\u0E33\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E15\u0E47\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E23\u0E39\u0E49\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E21\u0E35\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E2D\u0E22\u0E39\u0E48\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 2000 \u0E40\u0E01\u0E21\u0E2A\u0E4C \u0E41\u0E25\u0E30\u0E21\u0E35\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E43\u0E2B\u0E21\u0E48\u0E46 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07"},section4:{title:"\u0E17\u0E33\u0E44\u0E21\u0E15\u0E49\u0E2D\u0E07 Ruai99",description1:"\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19 Ruai99 \u0E1A\u0E19\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E2D\u0E1B\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E1A\u0E19\u0E23\u0E30\u0E1A\u0E1A IOS \u0E41\u0E25\u0E30 Android\u0E0B\u0E36\u0E48\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E25\u0E34\u0E01\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14 24 \u0E0A\u0E21.",acent:"\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 +",description2:"\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E01\u0E21\u0E2A\u0E4C \u0E2A\u0E25\u0E47\u0E2D\u0E15 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E22\u0E34\u0E07\u0E1B\u0E25\u0E32\u0E15\u0E48\u0E32\u0E07\u0E46\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22 \u0E17\u0E35\u0E48\u0E21\u0E35\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22\u0E46 \u0E17\u0E38\u0E01\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E40\u0E23\u0E35\u0E22\u0E01\u0E44\u0E14\u0E49\u0E27\u0E48\u0E32\u0E40\u0E2D\u0E32\u0E43\u0E08\u0E17\u0E31\u0E49\u0E07 \u0E04\u0E2D\u0E2A\u0E25\u0E47\u0E2D\u0E15 \u0E41\u0E25\u0E30\u0E04\u0E2D\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E22\u0E34\u0E07\u0E1B\u0E25\u0E32 \u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E22\u0E34\u0E07\u0E1B\u0E25\u0E32\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E48\u0E19\u0E07\u0E48\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E07\u0E34\u0E19\u0E40\u0E23\u0E47\u0E27 \u0E1B\u0E25\u0E32\u0E22\u0E34\u0E07\u0E15\u0E32\u0E22\u0E07\u0E48\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E2A\u0E19\u0E38\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E27\u0E31\u0E19\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E1A\u0E37\u0E48\u0E2D \u0E14\u0E49\u0E27\u0E22\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E22\u0E34\u0E07\u0E1B\u0E25\u0E32 \u0E21\u0E32\u0E01\u0E16\u0E36\u0E07 50 \u0E40\u0E01\u0E21\u0E2A\u0E4C \u0E41\u0E25\u0E30\u0E22\u0E31\u0E07\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22\u0E46 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07",description3:"Ruai99 \u0E41\u0E2D\u0E1E\u0E2A\u0E25\u0E47\u0E2D\u0E15\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A 1\u0E43\u0E19\u0E44\u0E17\u0E22 \u0E2A\u0E21\u0E31\u0E04\u0E23\u0E07\u0E48\u0E32\u0E22 \u0E23\u0E30\u0E1A\u0E1A\u0E1D\u0E32\u0E01\u0E16\u0E2D\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E14\u0E49\u0E27\u0E22\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C \u0E40\u0E23\u0E32\u0E08\u0E36\u0E07\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E27\u0E48\u0E32\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E21\u0E32\u0E40\u0E25\u0E48\u0E19\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E04\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E31\u0E19\u0E40\u0E17\u0E34\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A \u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E2A\u0E21\u0E37\u0E2D\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E48\u0E2D\u0E19\u0E04\u0E32\u0E2A\u0E34\u0E42\u0E19\u0E08\u0E23\u0E34\u0E07\u0E46 \u0E40\u0E23\u0E32\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E40\u0E23\u0E32\u0E08\u0E30\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E01\u0E21 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E21\u0E2D Ruai99 \u0E41\u0E2D\u0E1B\u0E01\u0E32\u0E23\u0E1E\u0E19\u0E31\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E44\u0E17\u0E22"}},Pr={title:"\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E2A\u0E39\u0E48 Ruai99",description:"\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E25\u0E34\u0E14\u0E40\u0E1E\u0E25\u0E34\u0E19\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E23\u0E31\u0E1A\u0E17\u0E31\u0E19\u0E17\u0E35\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E48\u0E19\u0E15\u0E48\u0E32\u0E07\u0E46"},Xr={systemCard:{IOS:{systemName:"iOS",primaryBtnText:"\u0E27\u0E34\u0E18\u0E35\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07",secondaryBtnText:"\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 \u0E40\u0E25\u0E22",description:"\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1AiOS \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E2D\u0E1B\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46",description2:"\u0E1D\u0E32\u0E01\u0E16\u0E2D\u0E19\u0E40\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27 \u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A iOS 11.0 \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B"},Android:{systemName:"Native",systemName2:"(Android)",primaryBtnText:"\u0E27\u0E34\u0E18\u0E35\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07",secondaryBtnText:"\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 \u0E40\u0E25\u0E22",slogan:"500,000+ Downloaded",description:"\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2D\u0E19\u0E14\u0E23\u0E2D\u0E22\u0E14\u0E4C",description2:"\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E2D\u0E1B\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46 \u0E1D\u0E32\u0E01\u0E16\u0E2D\u0E19\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27",description3:"\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A Android 5.1 \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B"},PWA:{systemName:"Browser Version",secondaryBtnText:"\u0E40\u0E25\u0E48\u0E19 \u0E40\u0E25\u0E22",description:"\u0E40\u0E25\u0E48\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E44\u0E14\u0E49\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E30\u0E14\u0E38\u0E14",description2:"\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E1A\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01\u0E17\u0E35\u0E48\u0E19\u0E48\u0E32\u0E17\u0E36\u0E48\u0E07"}}};var Qr={header:Fr,homePage:jr,footer:Pr,card:Xr};const Tr=O({legacy:!1,locale:"th",globalInjection:!0,messages:{zh:Rr,th:Qr,en:Ur}}),Lr="modulepreload",S={},Vr="./",x=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${Vr}${n}`,n in S)return;S[n]=!0;const r=n.endsWith(".css"),e=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${e}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":Lr,r||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),r)return new Promise((w,U)=>{d.addEventListener("load",w),d.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Nr=[{path:"/",name:"HomePage",component:()=>x(()=>import("./HomePage.4eb5c29e.js"),["assets/HomePage.4eb5c29e.js","assets/vendor.79f0d65f.js"])},{path:"/ContactPage",name:"ContactPage",component:()=>x(()=>import("./ContactPage.77d063c5.js"),["assets/ContactPage.77d063c5.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])},{path:"/DownloadPage",name:"DownloadPage",component:()=>x(()=>import("./DownloadPage.7d93dc64.js"),["assets/DownloadPage.7d93dc64.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])},{path:"/HowToPage",name:"HowToPage",component:()=>x(()=>import("./HowToPage.df8a084d.js"),["assets/HowToPage.df8a084d.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])},{path:"/PromotionsPage",name:"PromotionsPage",component:()=>x(()=>import("./PromotionsPage.97686273.js"),["assets/PromotionsPage.97686273.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])},{path:"/QAPage",name:"QAPage",component:()=>x(()=>import("./QAPage.1c36d863.js"),["assets/QAPage.1c36d863.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])},{path:"/VipPage",name:"VipPage",component:()=>x(()=>import("./VipPage.c099d712.js"),["assets/VipPage.c099d712.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.79f0d65f.js"])}],Or=M({history:D("/RUA199"),routes:Nr});var Mr=H({state:{},mutations:{},actions:{},modules:{}});J(kr).use(Or).use(Mr).use(Tr).mount("#app");export{A as u};
