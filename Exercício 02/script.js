let student = prompt("Digite o nome do(a) aluno(a)?")
let grade1 = prompt("Informe a nota da primeira prova?")
let grade2 = prompt("Informe a nota da segunda prova?")

let average = (Number(grade1) + Number(grade2)) / 2

let result = average >= 7

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de " + average + " e você foi aprovado(a) no concurso!")
} else {
  alert(student + ", sua média foi de " +  average + " e você não foi aprovado(a) no concurso!")
}