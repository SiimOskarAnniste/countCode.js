function count (string) {
  const count = {}

  string.split('').forEach(char => {
    count[char] = count[char] ? (count[char] + 1) : 1
  })
  return count
}
console.log(count("FWmcfgAWxeKnFJXGcACqcCYApSPiX0iHwbq2giBxX5Ebl6sjLfRxc2oFCgI4jFtFONF7NKb8iIhVOJl6aGlxlytbic30e8YSgLzd0oj65bHiHZNtykZPC0DHqgj6THRgT0rFM7G7SJbBlcu5UKrj7wxurxryxn5u7XDXFJ8AxhRuQU6EeJyigo3SD5CYYTc8sOoXTa59Vh0QfTkdKkrrYBTg4sWcCmeWiA73igiM8MD2IXleSQk4WlTLiEwn3JhYo93iHlh1Amt1joRd6hiOekcELMKIBsBBmQnb72pL5LKQ8GufbXPMRbOO5OnLzsdPhLddf4izXl6x8suntNs68VATvVOQZRjxL8zSOcZN87YqnuB6Mcsqr1WbVsWvfLC17MbW59tJ6Z5r6mDdiiEffxACk7C6w4k9AS2N9rQTNM8xmGx4JQLDr6hd3bYXSm7ZgophTYCmMxOWisl31Fd0SNCZItvlfdqW"))
