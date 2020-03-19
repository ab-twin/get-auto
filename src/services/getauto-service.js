
class GetautoService {
    clients = [
        {
            id: 1,
            name: 'Vasya',
            company: 'remont mashin',
            coord: [55.76, 37.64]
        },
        {
            id: 2,
            name: 'Егоров',
            company: 'BMW service',
            coord: [55.827, 37.522]
        },
        {
            id: 3,
            name: 'Ivanov',
            company: 'GET-AUTO Corp',
            coord: [55.645, 37.732]
        }
    ];

    order = {
        id: 0,
        company: 'BMW service',
        date: '20 февраля в 14:00',
        car: 'Mitsubishi Galant (2002)',
        status: {
            id: 1,
            title: 'В работе'
        },
        name: 'Федоров Василий',
        phone: '+7 (909) 909-99-00',
        actions: []
    }

    getCompanies() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve(this.clients);
                }
                reject(new Error('Something has error!'));
            }, Math.floor(Math.random() * 1000) + 20);
        });
    }

    getOrders() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    let orders = [];
                    for (let i = 1; i < 100; i++) {
                        orders.push({...this.order, id: i});
                    }
                    resolve(orders);
                }
                reject(new Error('Something has error!'));
            }, Math.floor(Math.random() * 1000) + 20);
        });
    }
}

export default GetautoService;