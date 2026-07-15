document.addEventListener('DOMContentLoaded', () => {
    // 1. Weekly Activity Chart (Line Chart)
    const ctxWeekly = document.getElementById('weeklyActivityChart');
    if (ctxWeekly) {
        // Create premium gradient fill
        const ctx = ctxWeekly.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.00)');

        new Chart(ctxWeekly, {
            type: 'line',
            data: {
                labels: window.weeklyLabels || [],
                datasets: [{
                    label: 'Hours Studied',
                    data: window.weeklyData || [],
                    borderColor: '#6366f1',
                    borderWidth: 3,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#0c101b',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#161c2d',
                        titleColor: '#f8fafc',
                        bodyColor: '#cbd5e1',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.parsed.y} hours`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)'
                        },
                        ticks: {
                            color: '#64748b',
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#64748b',
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            callback: function(value) {
                                return value + 'h';
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 2
                    }
                }
            }
        });
    }

    // 2. Category Split Chart (Doughnut Chart)
    const ctxCategory = document.getElementById('categorySplitChart');
    if (ctxCategory) {
        new Chart(ctxCategory, {
            type: 'doughnut',
            data: {
                labels: window.categoryLabels || ['General'],
                datasets: [{
                    data: window.categoryData || [0],
                    backgroundColor: [
                        '#6366f1', // Indigo
                        '#a855f7', // Purple
                        '#06b6d4', // Cyan
                        '#10b981', // Emerald Green
                        '#f43f5e', // Rose
                        '#f59e0b'  // Amber
                    ],
                    borderWidth: 3,
                    borderColor: '#161c2d',
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#cbd5e1',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#161c2d',
                        titleColor: '#f8fafc',
                        bodyColor: '#cbd5e1',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        padding: 10,
                        cornerRadius: 8
                    }
                },
                cutout: '70%'
            }
        });
    }
});
