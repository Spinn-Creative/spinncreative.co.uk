import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel('spinncreative.co.uk')
}
