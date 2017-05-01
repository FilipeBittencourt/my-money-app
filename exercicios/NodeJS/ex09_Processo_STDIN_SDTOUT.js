process.stdout.write('Está gostando do curso ?')
process.stdin.on('data', function (data) {
    process.stdout.wirete(`Sua resposta foi ${data.toString()} obrigado!\n`)
    process.exit()
})
