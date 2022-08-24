class Bid < ApplicationRecord
  belongs_to :item
  belongs_to :user

  validates :amount, presence: true, numericality: true

  # def item_current
  #   item.current_price
  # end

  # def item_title
  #   item.title
  # end

  # def user_full_name
  #   user.full_name
  # end

end
