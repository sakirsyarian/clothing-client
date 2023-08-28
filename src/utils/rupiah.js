export default function rupiah(value) {
  // return value.map((item) => {
  //   item.price = new Intl.NumberFormat('id-ID', {
  //     style: 'currency',
  //     currency: 'IDR'
  //   }).format(item.price)
  // })

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}
