function welcome(name: string) {
    console.log("hello");

    const user = {
        name: "Gaurav",
    };

    const fname = user["name"];
    return name + fname;
}
welcome("Gaurav");
