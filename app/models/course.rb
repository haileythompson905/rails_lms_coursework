class Course < ApplicationRecord
  validates :title, :desc, presence: true
end
