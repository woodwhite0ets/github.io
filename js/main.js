// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('py-3');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('py-3');
        navbar.classList.remove('py-2');
    }
    
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.add('opacity-0', 'invisible');
        backToTop.classList.remove('opacity-100', 'visible');
    }
});

// 移动端菜单切换
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 返回顶部
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // 关闭移动菜单
            document.getElementById('mobile-menu').classList.add('hidden');
            
            // 滚动到目标位置
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 技能图表
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['前端开发', 'Python编程', '数据处理', '爬虫开发', '数据库管理', '服务器部署', '版本控制'],
            datasets: [{
                label: '技能水平',
                data: [90, 85, 95, 88, 82, 78, 87],
                backgroundColor: 'rgba(22, 93, 255, 0.2)',
                borderColor: 'rgba(22, 93, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(22, 93, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(22, 93, 255, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

// 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section > div > div.text-center, .project-card, .skill-card').forEach(el => {
    observer.observe(el);
});

// 表单提交
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以添加表单验证和提交逻辑
    alert('消息已发送，感谢您的联系！');
    this.reset();
});    