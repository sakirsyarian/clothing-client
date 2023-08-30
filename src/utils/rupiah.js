/**
 * The function "rupiah" formats a given value as Indonesian Rupiah currency.
 * @param value - The value parameter is the number that you want to format as a currency in Indonesian
 * Rupiah (IDR).
 * @returns a formatted string representation of the given value in Indonesian Rupiah currency format.
 */

export default function rupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}
