import md5 from "md5";


export default function hashChapterTitle(title){
  return "chap_"+md5(title)
}