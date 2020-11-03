function getData() {
    return new Promise((resolve) => {
        Tabletop.init({
            key:
                'https://script.google.com/macros/s/AKfycbxGXwQCZz8PKfk-NMcOSxiGarYb9Pul5TSt0xP6xGAUXO8_ldmM/exec',
            callback: (data) => resolve(data),
            simpleSheet: true,
        });
    });
}

export default async (req, res) => {
    const data = await getData();
    res.send(data);
};
