const rewire = require("rewire")
const Company = rewire("./Company")
const styles = Company.__get__("styles")
// @ponicode
describe("styles", () => {
    test("0", () => {
        let callFunction = () => {
            styles({ margin20: "150.151.152.153", companyLogoWidth: "Tokyo", margin30: "192.168.99.101", breakTablet: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            styles({ margin20: "192.168.99.101", companyLogoWidth: "Skhirat", margin30: "150.151.152.153", breakTablet: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            styles({ margin20: "150.151.152.153", companyLogoWidth: "Tokyo", margin30: "192.168.99.101", breakTablet: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            styles({ margin20: "1.2.3.4", companyLogoWidth: "Saint-Denis", margin30: "192.168.99.101", breakTablet: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            styles({ margin20: "150.151.152.153", companyLogoWidth: "Saint-Denis", margin30: "150.151.152.153", breakTablet: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            styles(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
