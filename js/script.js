// Gerar o relatório do uso mensal
document.addEventListener("DOMContentLoaded", () => {
    const gerarRelatorioBtn = document.querySelector("#gerarRelatorio");
    if (gerarRelatorioBtn) {
        gerarRelatorioBtn.addEventListener("click", gerarRelatorio);
    }
 });
 function gerarRelatorio() {
    alert("Relatório do uso mensal gerado com sucesso!");
 }
 // Configuração dos gráficos com Chart.js
 document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("graficoGeral")) {
        criarGraficoGeral();
    }
    if (document.getElementById("graficoMensal")) {
        criarGraficoMensal();
    }
    if (document.getElementById("graficoDiario")) {
        criarGraficoDiario();
    }
    if (document.getElementById("graficoMicroHub")) {
        criarGraficoMicroHub();
    }
    if (document.getElementById("graficoHistorico")) {
        criarGraficoHistorico();
    }
 });
 // Gráfico Geral
 function criarGraficoGeral() {
    const ctx = document.getElementById("graficoGeral").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Energia Consumida", "Energia Disponível"],
            datasets: [{
                data: [60, 40],
                backgroundColor: ["#f1c627", "#8cb541"],
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Consumo de Energia no Mês Atual'
                }
            }
        }
    });
 }
 // Gráfico Mensal
 function criarGraficoMensal() {
    const ctx = document.getElementById("graficoMensal").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [{
                label: "Produção de Energia (kWh)",
                data: [300, 400, 350, 500, 450],
                backgroundColor: "#f1c627",
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutBounce'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Produção Mensal de Energia'
                }
            }
        }
    });
 }
 // Gráfico Diário
 function criarGraficoDiario() {
    const ctx = document.getElementById("graficoDiario").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07"],
            datasets: [{
                label: "Consumo Diário (kWh)",
                data: [20, 25, 22, 30, 28, 35, 40],
                backgroundColor: "#f1c627",
                borderColor: "#8cb541",
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Consumo Diário de Energia'
                }
            }
        }
    });
 }
 // Gráfico do Micro-Hub
 function criarGraficoMicroHub() {
    const ctx = document.getElementById("graficoMicroHub").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Energia Gerada", "Energia Comercializada", "Energia Disponível"],
            datasets: [{
                data: [500, 200, 300],
                backgroundColor: ["#f1c627", "#8cb541", "#208047"],
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateRotate: true,
                animateScale: true
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Dados do Micro-Hub de Energia'
                }
            }
        }
    });
 }
 // Gráfico Histórico de Consumo e Produção
 function criarGraficoHistorico() {
    const ctx = document.getElementById("graficoHistorico").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
            datasets: [
                {
                    label: "Consumo de Energia (kWh)",
                    data: [300, 320, 310, 290, 400, 380, 370],
                    borderColor: "#f1c627",
                    backgroundColor: "rgba(241, 198, 39, 0.2)",
                    fill: true,
                    tension: 0.3
                },
                {
                    label: "Produção de Energia (kWh)",
                    data: [350, 400, 380, 420, 450, 430, 410],
                    borderColor: "#8cb541",
                    backgroundColor: "rgba(140, 181, 65, 0.2)",
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Histórico de Consumo e Produção de Energia'
                }
            }
        }
    });
 }