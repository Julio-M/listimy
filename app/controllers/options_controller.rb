class OptionsController < ApplicationController
  skip_before_action :authorize, only: %i[create]
  skip_before_action :authorize_freelancer, only: %i[create]
  
  def index
    options = Option.all
    render json: options
  end

  def create
    new_option = Option.create!(opt_params)
    render json: new_option, status: :created
  end

  private
    #goes under private
  def opt_params
    params.permit(:name)
  end

end
