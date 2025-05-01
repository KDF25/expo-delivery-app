import { Prisma } from "@prisma/client"
import { OrderDto, OrderItemDto } from "src/order/dto/order.dto"

export const newOrderMail = (
	products: Prisma.ProductCreateInput[],
	order: OrderDto,
) => {
	const itemsMap = new Map<string, OrderItemDto>(
		order.items.map((item) => [item.productId, item]),
	)

	const productsHtml = products
		.map((product) => {
			const item = itemsMap.get(product.id)
			const quantity = item?.quantity || 1
			const itemTotal = product.price * quantity

			return `
				<tr>
					<td style="padding: 10px 0; border-bottom: 1px solid #eee;">
						<img src="${product.image}" alt="${product.name}" width="60" height="60" style="border-radius: 6px; margin-right: 10px; vertical-align: middle;" />
					</td>
					<td style="padding: 10px 0; border-bottom: 1px solid #eee; vertical-align: top;">
						<strong>${product.name}</strong><br/>
						$${product.price.toFixed(2)} × ${quantity} = <strong>$${itemTotal.toFixed(2)}</strong>
					</td>
				</tr>
			`
		})
		.join("")

	const totalAmount = products.reduce((acc, product) => {
		const item = itemsMap.get(product.id)
		const quantity = item?.quantity || 1
		return acc + product.price * quantity
	}, 0)

	return `
		<div style="background: #f4f4f4; padding: 40px; font-family: Arial, sans-serif;">
			<div style="max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
				<h2 style="margin-top: 0; color: #333; text-align: center;">Thank you for your order!</h2>
				<p style="color: #555; line-height: 1.5; text-align: center;">
					We've received your payment and are already preparing your delicious food.
				</p>

				<h3 style="color: #333; margin-top: 30px;">Your Order</h3>
				<table style="width: 100%; border-collapse: collapse;">
					${productsHtml}
				</table>

				<h3 style="color: #333; margin-top: 30px; text-align: center;">
					Total: $${totalAmount.toFixed(2)}
				</h3>

				<p style="color: #555; line-height: 1.5; margin-top: 30px; text-align: center;">
					Thank you for choosing us! We’ll deliver your order as quickly as possible. <br />
					Enjoy your meal!
				</p>
			</div>
		</div>
	`
}
